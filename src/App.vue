<template>
	<div class="grid grid-cols-2">
		<div
			class="col-span-1 text-xs bg-black text-green-300 p-2 h-screen overflow-scroll"
		>
			<pre>{{ config }}</pre>
		</div>
		<div class="col-span-1 flex justify-center items-center relative">
			<div id="glContainer" style="width: 100%; height: 100%">
				<canvas
					id="glcanvas"
					style="width: 100%; height: 100%"
				></canvas>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { ref } from 'vue';

const config = ref({
	name: 'Standardbar 1,8m',
	user_id: 1,
	createdAt: '2022-07-22',
	updatedAt: '2022-07-22',
	front: {
		modules: [
			{
				baseModule: {
					name: 'fx-bm-wh_Flexx_Grundmodul',
					moduleAnchors: ['w', 'e'],
					panelMounts: ['w', 'n', 'n', 'e'],
					doorMounts: ['s', 's'],
					installationSlots: 10,
					height: 600,
					width: 1200,
					depth: 600,
				},
				position: { x: 1, z: 1 },
				orientation: 'n',
				racks: [
					{
						rackTop: {
							items: [
								{
									name: 'xx-wt22-wh_Arbeitsplatte_2-2',
									position: { x: 0, y: 0, z: 0 },
								},
								{
									name: 'xx-zb11.1_Schneidbrett_mit_Loch',
									position: { x: 0, y: 0, z: 0 },
								},
								{
									name: 'xx-zb11_Schneidbrett',
									position: { x: 0, y: -277, z: 0 },
								},
								{
									name: 'xx-zbgns1.6.150_GN-Behälter_1-6_150tief',
									position: { x: 0, y: 0, z: 0 },
								},
								{
									name: 'xx-zbgns1.6.150_GN-Behälter_1-6_150tief',
									position: { x: 0, y: 175, z: 0 },
								},
								{
									name: 'xx-zbgns1.6.150_GN-Behälter_1-6_150tief',
									position: { x: 0, y: -350, z: 0 },
								},
								{
									name: 'xx-zbgns1.2.150_GN-Behälter_1-2_150tief',
									position: { x: 0, y: 0, z: 0 },
								},
							],
							startPosition: 0,
							heightSpan: 0,
							CounterTopColor: '#000000',
						},
						rackInserts: [
							{
								items: [
									{
										name: 'xx-zb7.8_Fachbodenset',
										position: { x: 0, y: 0, z: 0 },
									},
								],
								startPosition: 174,
								heightSpan: 116,
							},
							{
								items: [
									{
										name: 'xx-zb7.8_Fachbodenset',
										position: { x: 0, y: 0, z: 0 },
									},
								],
								startPosition: 522,
								heightSpan: 116,
							},
						],
						hookIn: { name: 'xx-zb4_Köcherboard' },
						speedRack: { name: 'xx-zb10_Speedrack1_links.001' },
					},
					{
						rackTop: {
							items: [
								{
									name: 'xx-wt21-wh_Arbeitsplatte_2-1.002',
									position: { x: 0, y: 0, z: 0 },
								},
							],
							startPosition: 0,
							heightSpan: 0,
							CounterTopColor: '#000000',
						},
						rackInserts: [
							{
								items: [
									{
										name: 'xx-zb7.8_Fachbodenset',
										position: { x: 0, y: 0, z: 0 },
									},
								],
								startPosition: 174,
								heightSpan: 116,
							},
							{
								items: [
									{
										name: 'xx-zb7.8_Fachbodenset',
										position: { x: 0, y: 0, z: 0 },
									},
								],
								startPosition: 522,
								heightSpan: 116,
							},
						],
						hookIn: null,
						speedRack: null,
					},
				],
				backWalls: null,
				frameColor: '#000000',
			},
			{
				baseModule: {
					name: 'fx-bms-wh_Flexx_Grundmodul_Mini',
					moduleAnchors: ['w', 'e'],
					panelMounts: ['w', 'n', 'e'],
					doorMounts: ['s'],
					installationSlots: 10,
					height: 600,
					width: 600,
					depth: 600,
				},
				position: { x: 3, z: 1 },
				orientation: 'n',
				racks: [
					{
						rackTop: {
							items: [
								{
									name: 'xx-wt00-wh_G-RaxxG-Flexx_Abdeckleiste_2-9',
									position: { x: 0, y: 0, z: 0 },
								},
							],
							startPosition: 0,
							heightSpan: 0,
							CounterTopColor: '#000000',
						},
						rackInserts: [
							{
								items: [
									{
										name: 'xx-zb7.8_Fachbodenset',
										position: { x: 0, y: 0, z: 0 },
									},
									{
										name: 'xx-zb1_Flaschentreppe_1',
										position: { x: 0, y: 0, z: 0 },
									},
								],
								startPosition: 174,
								heightSpan: 116,
							},
							{
								items: [
									{
										name: 'xx-zb7.8_Fachbodenset',
										position: { x: 0, y: 0, z: 0 },
									},
								],
								startPosition: 174,
								heightSpan: 116,
							},
							{
								items: [
									{
										name: 'xx-zb7.8_Fachbodenset',
										position: { x: 0, y: 0, z: 0 },
									},
								],
								startPosition: 522,
								heightSpan: 116,
							},
						],
						hookIn: null,
						speedRack: { name: 'xx-zb10_Speedrack1_vorne' },
					},
				],
				backWalls: null,
				frameColor: '#000000',
			},
		],
		frontFrames: null,
		frontPanels: [
			{
				name: 'xx-sc-wh_Seiten_Frontverkleidung_links',
				position: { x: 1, z: 1 },
				orientation: 'w',
				panelColor: '#000000',
			},
			{
				name: 'xx-sc-wh_Seiten_Frontverkleidung',
				position: { x: 1, z: 1 },
				orientation: 'n',
				panelColor: '#000000',
			},
			{
				name: 'xx-sc-wh_Seiten_Frontverkleidung',
				position: { x: 2, z: 1 },
				orientation: 'n',
				panelColor: '#000000',
			},
			{
				name: 'xx-sc-wh_Seiten_Frontverkleidung',
				position: { x: 3, z: 1 },
				orientation: 'n',
				panelColor: '#000000',
			},
			{
				name: 'xx-sc-wh_Seiten_Frontverkleidung_rechts',
				position: { x: 3, z: 1 },
				orientation: 'e',
				panelColor: '#000000',
			},
		],
		doors: null,
		counterBoard: {
			boards: [
				{
					name: 'xx-ctsa2-wh_Thekenboard_1200',
					position: { x: 1, z: 1 },
					orientation: 'n',
				},
				{
					name: 'xx-ctsa1-wh_Thekenboard_600',
					position: { x: 3, z: 1 },
					orientation: 'n',
				},
			],
			accessories: [
				{
					name: 'xx-zb26_Bartop_Tray',
					position: { x: 2, z: 1 },
					orientation: 'n',
				},
			],
			sideApplications: [
				{
					name: 'xx-sfa4-wh_Seitenapp4_links',
					position: { x: 1, z: 1 },
					orientation: 'w',
				},
				{
					name: 'xx-sfa4-wh_Seitenapp4_rechts',
					position: { x: 3, z: 1 },
					orientation: 'e',
				},
			],
		},
		branding: {
			frontBannerName: 'xx-fb-1200-1_Frontbanner_1200x860',
			hangingSignName: null,
			logoUpload:
				'https://der-barmann.de/wp-content/uploads/2020/03/Barmann.svg',
			globalFrameColor: '#000000',
			globalCounterTopColor: '#000000',
			globalPanelColor: '#000000',
		},
	},
	back: null,
	additionalAccessories: null,
	display: {
		glbFileUrl: 'https://grk01.aw-studio.de/grack.glb',
		floorImageUrl: 'https://grk01.aw-studio.de/floor1.jpg',
		gridItems: [
			{
				nodeName: 'Flexx-Grundgestell',
				gridPosition: { x: 0, z: 0 },
				rotation: 0,
				moduleItems: [
					{
						nodeName: 'Arbeitsplatte-2-02',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: '#000000',
					},
					{
						nodeName: 'Schneidebrett_mit_Loch',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: null,
					},
					{
						nodeName: 'Schneidebrett',
						modulePosition: { x: 277, y: 0, z: 0 },
						color: null,
					},
					{
						nodeName: 'GN-1_6-150 Tief',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: null,
					},
					{
						nodeName: 'GN-1_6-150 Tief',
						modulePosition: { x: 175, y: 0, z: 0 },
						color: null,
					},
					{
						nodeName: 'GN-1_6-150 Tief',
						modulePosition: { x: 350, y: 0, z: 0 },
						color: null,
					},
					{
						nodeName: 'GN-1_2-150 Tief',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: null,
					},
					{
						nodeName: 'Fachbodenset',
						modulePosition: { x: 0, y: 175, z: 0 },
						color: null,
					},
					{
						nodeName: 'Fachbodenset',
						modulePosition: { x: 0, y: 520, z: 0 },
						color: null,
					},
					{
						nodeName: 'Köcherboard',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: null,
					},
					{
						nodeName: 'Speedrack-Links',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: null,
					},
					{
						nodeName: 'Arbeitsplatte-2-1',
						modulePosition: { x: 600, y: 0, z: 0 },
						color: '#000000',
					},
					{
						nodeName: 'Fachbodenset',
						modulePosition: { x: 600, y: 175, z: 0 },
						color: null,
					},
					{
						nodeName: 'Fachbodenset',
						modulePosition: { x: 600, y: 520, z: 0 },
						color: null,
					},
					{
						nodeName: 'Seiten&Frontverkleidung-Links',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: '#000000',
					},
					{
						nodeName: 'Seiten&Frontverkleidung-Vorne',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: '#000000',
					},
					{
						nodeName: 'Seiten&Frontverkleidung-Vorne',
						modulePosition: { x: 600, y: 0, z: 0 },
						color: '#000000',
					},
					{
						nodeName: 'Seitenapp 04-Links',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: '#000000',
					},
					{
						nodeName: 'Thekenboard-1200',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: '#000000',
					},
					{
						nodeName: 'Bartop Tray',
						modulePosition: { x: 600, y: 0, z: 0 },
						color: null,
					},
				],
				color: '#000000',
			},
			{
				nodeName: 'Flexx-Mini-Grundgestell',
				gridPosition: { x: 1200, z: 0 },
				rotation: 0,
				moduleItems: [
					{
						nodeName: 'Arbeitsplatte-2-09',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: '#000000',
					},
					{
						nodeName: 'Fachbodenset',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: null,
					},
					{
						nodeName: 'Flaschentreppe',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: null,
					},
					{
						nodeName: 'Speedrack-Bedienerseite',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: null,
					},
					{
						nodeName: 'Fachbodenset',
						modulePosition: { x: 0, y: 175, z: 0 },
						color: null,
					},
					{
						nodeName: 'Fachbodenset',
						modulePosition: { x: 0, y: 520, z: 0 },
						color: null,
					},
					{
						nodeName: 'Seiten&Frontverkleidung-Vorne',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: '#000000',
					},
					{
						nodeName: 'Seiten&Frontverkleidung-Rechts',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: '#000000',
					},
					{
						nodeName: 'Thekenboard-600',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: '#000000',
					},
					{
						nodeName: 'Seitenapp 04-Rechts',
						modulePosition: { x: 0, y: 0, z: 0 },
						color: '#000000',
					},
				],
				color: '#000000',
			},
			{
				nodeName: 'Frontbanner-1200x860',
				gridPosition: { x: 300, z: 0 },
				rotation: 0,
				moduleItems: [],
				color: '#FFFFFF',
			},
		],
		brandings: [
			{
				gridPosition: { x: 300, z: 0 },
				rotation: 0,
				logoUploadUrl:
					'https://grk01.aw-studio.de/assets/logo180.9d0a72d1.png',
				logoTransform: {
					x: 200,
					y: 400,
					z: 50,
					flip: false,
					width: 800,
					height: 450,
				},
			},
		],
		center: { x: 900, z: 300 },
	},
});

export default {
	name: 'app',
	mounted() {
		let cablesJs = document.createElement('script');
		cablesJs.src = '/js/patch.js';
		cablesJs.onload = () => {
			CABLES.patch = new CABLES.Patch({
				patch: CABLES.exportedPatch,
        prefixAssetPath: "/",
				variables: {
					displayConfig: config._rawValue,
				},
				glCanvasId: 'glcanvas',
				onError: this.showError,
				onPatchLoaded: this.patchInitialized,
				onFinishedLoading: this.patchFinishedLoading,
			});
		};
		document.head.appendChild(cablesJs);
	},
	showError(errId, errMsg) {
		alert('An error occured: ' + errId + ', ' + errMsg);
	},
	patchInitialized() {},
	patchFinishedLoading() {},
};
</script>
