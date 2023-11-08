<template>
  <div class="grid h-screen">
    <div
      class="col-span-1 text-xs bg-black text-green-300 p-2 overflow-scroll"
      v-if="jsonConfig"
    >
      <pre>{{ jsonConfig }}</pre>
    </div>
    <div class="col-span-1 flex justify-center items-center relative">
      <div id="glContainer" style="width: 100%; height: 100%">
        <canvas id="glcanvas" style="width: 100%; height: 100%"></canvas>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import jsonConfig from "./assets/1.json";

export default {
  name: "app",
  mounted() {
    let cablesJs = document.createElement("script");
    // cablesJs.src = "/js/patch_old2.js";
    cablesJs.src = "/js/patch.js";
    cablesJs.onload = () => {
      CABLES.patch = new CABLES.Patch({
        patch: CABLES.exportedPatch,
        prefixAssetPath: "/",
        variables: {
          displayConfig: jsonConfig,
        },
        glCanvasId: "glcanvas",
        onError: this.showError,
        onPatchLoaded: this.patchInitialized,
        onFinishedLoading: this.patchFinishedLoading,
      });
    };
    document.head.appendChild(cablesJs);
  },
  showError(errId, errMsg) {
    alert("An error occured: " + errId + ", " + errMsg);
  },
  patchInitialized() {},
  patchFinishedLoading() {},
};
</script>
