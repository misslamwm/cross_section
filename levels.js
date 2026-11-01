/* 幾何廚神大挑戰：三關食材題庫。 */
const CHEF_LEVELS = Object.freeze(
[
  {
    "id": "radish",
    "stage": 1,
    "name": "香煎蘿蔔糕",
    "image": "assets/radish.png",
    "solid": "長方體",
    "model": "box",
    "target": "長方形",
    "canonicalCut": "H",
    "objective": "從長方體切出長方形截面",
    "why": "長方體以水平平面切開得到長方形；某些鉛垂切割亦會得到長方形。因此接受所有符合條件的方向。",
    "polygon": [
      [
        0.24,
        0.31
      ],
      [
        0.52,
        0.22
      ],
      [
        0.79,
        0.37
      ],
      [
        0.85,
        0.65
      ],
      [
        0.61,
        0.79
      ],
      [
        0.27,
        0.59
      ]
    ]
  },
  {
    "id": "cheesecake",
    "stage": 1,
    "name": "金黃芝士蛋糕磚",
    "image": "assets/cheesecake.png",
    "solid": "長方體",
    "model": "box",
    "target": "長方形",
    "canonicalCut": "V",
    "objective": "比較長方體的水平及鉛垂切割",
    "why": "長方體可以沿多個正交方向切出長方形，並不只有一種正確刀法。",
    "polygon": [
      [
        0.2,
        0.34
      ],
      [
        0.41,
        0.2
      ],
      [
        0.78,
        0.39
      ],
      [
        0.84,
        0.66
      ],
      [
        0.59,
        0.81
      ],
      [
        0.19,
        0.58
      ]
    ]
  },
  {
    "id": "swissroll",
    "stage": 1,
    "name": "原條忌廉瑞士卷",
    "image": "assets/swissroll.png",
    "solid": "橫放直圓柱",
    "model": "cylinder",
    "target": "圓形",
    "canonicalCut": "V",
    "axisAngle": 35,
    "angleTolerance": 43,
    "objective": "辨認橫放圓柱的圓形截面",
    "why": "只有垂直於圓柱軸線的平面，才能切出圓形截面；奶油螺旋是紋理，不會改變截面外輪廓。",
    "polygon": [
      [
        0.16,
        0.28
      ],
      [
        0.34,
        0.19
      ],
      [
        0.73,
        0.38
      ],
      [
        0.8,
        0.6
      ],
      [
        0.69,
        0.77
      ],
      [
        0.44,
        0.75
      ],
      [
        0.16,
        0.51
      ]
    ]
  },
  {
    "id": "sushi",
    "stage": 1,
    "name": "原條太卷壽司",
    "image": "assets/sushi.png",
    "solid": "橫放直圓柱",
    "model": "cylinder",
    "target": "圓形",
    "canonicalCut": "V",
    "axisAngle": 38,
    "angleTolerance": 43,
    "objective": "根據橫放圓柱的柱軸找切割方向",
    "why": "垂直柱軸的鉛垂平面穿過圓柱內部時，截面是圓形。米飯和餡料只是內部圖案。",
    "polygon": [
      [
        0.15,
        0.28
      ],
      [
        0.35,
        0.17
      ],
      [
        0.73,
        0.38
      ],
      [
        0.81,
        0.56
      ],
      [
        0.69,
        0.79
      ],
      [
        0.41,
        0.74
      ],
      [
        0.14,
        0.52
      ]
    ]
  },
  {
    "id": "zongzi",
    "stage": 1,
    "name": "原隻三角粽",
    "image": "assets/zongzi.png",
    "solid": "理想化三角錐",
    "model": "triPyramid",
    "target": "三角形",
    "canonicalCut": "H",
    "apex": [
      0.51,
      0.16
    ],
    "apexTolerance": 0.1,
    "objective": "找出三角錐的三角形截面",
    "why": "水平平面平行於三角形底面時會得到三角形。經過頂點並穿過內部的某些鉛垂平面也能得到三角形。",
    "polygon": [
      [
        0.25,
        0.61
      ],
      [
        0.45,
        0.22
      ],
      [
        0.51,
        0.16
      ],
      [
        0.77,
        0.59
      ],
      [
        0.7,
        0.72
      ],
      [
        0.47,
        0.79
      ]
    ]
  },
  {
    "id": "bambooRice",
    "stage": 2,
    "name": "日式竹筒飯",
    "image": "assets/bamboo-rice.png",
    "solid": "直立圓柱",
    "model": "uprightCylinder",
    "target": "圓形",
    "canonicalCut": "H",
    "instruction": "請水平切開 ↔️！",
    "objective": "由直立圓柱切出圓形截面",
    "why": "直立圓柱用水平平面切開，截面是圓形。",
    "polygon": [
      [
        0.29,
        0.15
      ],
      [
        0.69,
        0.15
      ],
      [
        0.77,
        0.78
      ],
      [
        0.24,
        0.81
      ]
    ]
  },
  {
    "id": "onigiriPyramid",
    "stage": 2,
    "name": "御飯糰金字塔",
    "image": "assets/onigiri-pyramid.png",
    "solid": "直立四角錐",
    "model": "squarePyramid",
    "target": "四邊形",
    "canonicalCut": "H",
    "instruction": "請水平切開 ↔️！",
    "objective": "由直立四角錐切出四邊形截面",
    "why": "直立四角錐用平行底面的水平平面切開，可得到四邊形截面。",
    "polygon": [
      [
        0.17,
        0.57
      ],
      [
        0.47,
        0.16
      ],
      [
        0.82,
        0.57
      ],
      [
        0.49,
        0.85
      ]
    ]
  },
  {
    "id": "takoyakiBall",
    "stage": 2,
    "name": "章魚燒",
    "image": "assets/takoyaki-ball.png",
    "solid": "球體",
    "model": "sphere",
    "target": "圓形",
    "canonicalCut": "H",
    "instruction": "請水平切開 ↔️！",
    "objective": "了解球體的平面截面都是圓形",
    "why": "本題指定水平切開：只要水平平面穿過球體內部，真正的截面就是圓形。球體其他方向的平面截面也可以是圓形，但今次要遵守主廚刀法。",
    "polygon": [
      [
        0.19,
        0.56
      ],
      [
        0.24,
        0.36
      ],
      [
        0.4,
        0.2
      ],
      [
        0.61,
        0.18
      ],
      [
        0.77,
        0.3
      ],
      [
        0.84,
        0.48
      ],
      [
        0.8,
        0.68
      ],
      [
        0.67,
        0.82
      ],
      [
        0.46,
        0.86
      ],
      [
        0.28,
        0.77
      ]
    ]
  },
  {
    "id": "tamagoyakiBlock",
    "stage": 2,
    "name": "玉子燒塊",
    "image": "assets/tamagoyaki-block.png",
    "solid": "直立長方體",
    "model": "uprightBox",
    "target": "長方形",
    "canonicalCut": "V",
    "instruction": "請鉛垂切開 ↕️！",
    "objective": "由直立長方體切出長方形截面",
    "why": "直立長方體用鉛垂平面切開，會得到長方形截面；合理的鉛垂刀法都應接受。",
    "polygon": [
      [
        0.24,
        0.24
      ],
      [
        0.67,
        0.2
      ],
      [
        0.81,
        0.36
      ],
      [
        0.72,
        0.8
      ],
      [
        0.3,
        0.78
      ],
      [
        0.2,
        0.58
      ]
    ]
  },
  {
    "id": "wasabiCone",
    "stage": 2,
    "name": "芥末小圓錐",
    "image": "assets/wasabi-cone.png",
    "solid": "直立圓錐",
    "model": "uprightCone",
    "target": "等腰三角形",
    "canonicalCut": "V",
    "center": [
      0.49,
      0.56
    ],
    "centerTolerance": 0.11,
    "instruction": "請鉛垂切開 ↕️！",
    "objective": "由直立圓錐切出等腰三角形截面",
    "why": "直立圓錐要用經過軸線的鉛垂平面切開，截面才是等腰三角形。",
    "polygon": [
      [
        0.25,
        0.72
      ],
      [
        0.33,
        0.46
      ],
      [
        0.47,
        0.16
      ],
      [
        0.62,
        0.29
      ],
      [
        0.73,
        0.54
      ],
      [
        0.7,
        0.76
      ],
      [
        0.51,
        0.84
      ],
      [
        0.33,
        0.81
      ]
    ]
  },
  {
    "id": "lapCheong",
    "stage": 3,
    "name": "廣式臘腸",
    "image": "assets/lap-cheong.png",
    "solid": "橫放直圓柱",
    "model": "horizontalCylinderUniform",
    "target": "圓形",
    "canonicalCut": "V",
    "instruction": "請切出均勻截面！",
    "objective": "辨認橫放圓柱垂直於軸線的均勻圓形截面",
    "why": "沿橫放圓柱的長軸，在不同位置用垂直柱軸的鉛垂平面切開，截面都是大小相同的圓形。",
    "polygon": [
      [
        0.09,
        0.47
      ],
      [
        0.17,
        0.4
      ],
      [
        0.84,
        0.4
      ],
      [
        0.92,
        0.49
      ],
      [
        0.9,
        0.63
      ],
      [
        0.82,
        0.7
      ],
      [
        0.15,
        0.69
      ],
      [
        0.08,
        0.6
      ]
    ]
  },
  {
    "id": "triangleMalai",
    "stage": 3,
    "name": "三角馬拉糕",
    "image": "assets/triangle-malai.png",
    "solid": "直立直三角柱",
    "model": "verticalTriPrismUniform",
    "target": "三角形",
    "canonicalCut": "H",
    "instruction": "請切出均勻截面！",
    "objective": "辨認直立三角柱的水平均勻三角形截面",
    "why": "理想化直三角柱在不同高度水平切割，所得截面都是形狀和大小相同的三角形。",
    "polygon": [
      [
        0.23,
        0.37
      ],
      [
        0.52,
        0.17
      ],
      [
        0.81,
        0.37
      ],
      [
        0.84,
        0.75
      ],
      [
        0.63,
        0.85
      ],
      [
        0.33,
        0.82
      ],
      [
        0.21,
        0.69
      ]
    ]
  },
  {
    "id": "taroCake",
    "stage": 3,
    "name": "乾蒸芋頭糕",
    "image": "assets/taro-cake.png",
    "solid": "橫放長方體",
    "model": "horizontalBoxUniform",
    "target": "長方形",
    "canonicalCut": "H",
    "instruction": "請切出均勻截面！",
    "objective": "比較長方體水平及正交鉛垂切法的均勻長方形截面",
    "why": "長方體水平切，或沿與其邊對齊的鉛垂平面切，均可在不同位置取得全等的長方形截面。",
    "polygon": [
      [
        0.12,
        0.43
      ],
      [
        0.25,
        0.35
      ],
      [
        0.78,
        0.35
      ],
      [
        0.87,
        0.43
      ],
      [
        0.87,
        0.73
      ],
      [
        0.14,
        0.73
      ]
    ]
  },
  {
    "id": "bambooPork",
    "stage": 3,
    "name": "竹筒蒸排骨",
    "image": "assets/bamboo-pork.png",
    "solid": "橫放圓柱形竹筒（以整體外輪廓作理想化模型）",
    "model": "horizontalCylinderUniform",
    "target": "圓形",
    "canonicalCut": "V",
    "instruction": "請切出均勻截面！",
    "objective": "辨認橫放圓柱外輪廓的均勻圓形截面",
    "why": "此題只按理想化圓柱的「整體外輪廓」評分：垂直柱軸切得圓形。竹筒是中空的，若單看筒壁則截面為圓環；排骨及開口不是實心圓柱，不能把真實整件食物的截面直接視為圓形。",
    "polygon": [
      [
        0.06,
        0.41
      ],
      [
        0.12,
        0.34
      ],
      [
        0.89,
        0.33
      ],
      [
        0.97,
        0.41
      ],
      [
        0.96,
        0.66
      ],
      [
        0.89,
        0.73
      ],
      [
        0.11,
        0.72
      ],
      [
        0.05,
        0.63
      ]
    ]
  },
  {
    "id": "redbeanCoconut",
    "stage": 3,
    "name": "椰汁紅豆糕",
    "image": "assets/redbean-coconut.png",
    "solid": "直立實心圓柱",
    "model": "uprightCylinderUniform",
    "target": "圓形",
    "canonicalCut": "H",
    "instruction": "請切出均勻截面！",
    "objective": "辨認直立實心圓柱的水平均勻圓形截面",
    "why": "理想化直立實心圓柱，在不同高度水平切割，截面都是大小相同的圓形。紅豆只是內部紋理，不會改變截面外輪廓。",
    "polygon": [
      [
        0.24,
        0.31
      ],
      [
        0.32,
        0.18
      ],
      [
        0.7,
        0.18
      ],
      [
        0.79,
        0.29
      ],
      [
        0.79,
        0.72
      ],
      [
        0.7,
        0.84
      ],
      [
        0.31,
        0.84
      ],
      [
        0.23,
        0.73
      ]
    ]
  },
  {
    "id": "macaronSingle",
    "stage": 1,
    "name": "單粒馬卡龍",
    "image": "assets/s1_macaron.png",
    "solid": "直立矮圓柱",
    "model": "uprightCylinder",
    "target": "圓形",
    "canonicalCut": "H",
    "objective": "觀察直立圓柱的水平截面",
    "why": "把一粒馬卡龍視為圓柱，水平平面切過內部得到圓形。奶油餡是內部紋理。",
    "polygon": [
      [
        0.27,
        0.43
      ],
      [
        0.36,
        0.35
      ],
      [
        0.62,
        0.35
      ],
      [
        0.72,
        0.43
      ],
      [
        0.72,
        0.57
      ],
      [
        0.64,
        0.65
      ],
      [
        0.36,
        0.65
      ],
      [
        0.27,
        0.57
      ]
    ],
    "source": "new"
  },
  {
    "id": "strawberryMoussePyramid",
    "stage": 1,
    "name": "草莓慕斯金字塔",
    "image": "assets/s1_strawberry_pyramid.png",
    "solid": "直立正四角錐",
    "model": "squarePyramid",
    "target": "正方形",
    "canonicalCut": "H",
    "objective": "正四角錐平行底面截面",
    "why": "正四角錐以平行桌面、平行正方形底面的水平平面切過內部，截面是正方形。表面裝飾不改變外輪廓。",
    "polygon": [
      [
        0.48,
        0.09
      ],
      [
        0.83,
        0.69
      ],
      [
        0.71,
        0.79
      ],
      [
        0.27,
        0.79
      ],
      [
        0.17,
        0.68
      ]
    ],
    "source": "new"
  },
  {
    "id": "cherryChocolateTruffle",
    "stage": 1,
    "name": "櫻桃松露朱古力",
    "image": "assets/s1_cherry_truffle.png",
    "solid": "球體（不計櫻桃裝飾）",
    "model": "sphere",
    "target": "圓形",
    "canonicalCut": "H",
    "anyDirection": true,
    "objective": "理解球體任何穿過內部的平面截面",
    "why": "松露朱古力的主體近似球體；任何通過球體內部的平面截面都是圓形，櫻桃只是裝飾。",
    "polygon": [
      [
        0.27,
        0.3
      ],
      [
        0.36,
        0.24
      ],
      [
        0.64,
        0.24
      ],
      [
        0.76,
        0.36
      ],
      [
        0.77,
        0.66
      ],
      [
        0.66,
        0.77
      ],
      [
        0.36,
        0.77
      ],
      [
        0.25,
        0.65
      ]
    ],
    "source": "new"
  },
  {
    "id": "chocolateLayerCake",
    "stage": 1,
    "name": "朱古力蛋糕",
    "image": "assets/s1_chocolate_cake.png",
    "solid": "直立長方體",
    "model": "uprightBox",
    "allowOrthogonalBoth": true,
    "target": "長方形",
    "canonicalCut": "V",
    "objective": "觀察直立長方體的截面",
    "why": "直立長方體用與某一組相對面平行的水平或鉛垂平面切開，都可得到長方形；每一刀仍須穿過食材。",
    "polygon": [
      [
        0.29,
        0.26
      ],
      [
        0.37,
        0.14
      ],
      [
        0.76,
        0.14
      ],
      [
        0.82,
        0.22
      ],
      [
        0.81,
        0.83
      ],
      [
        0.3,
        0.83
      ]
    ],
    "source": "new"
  },
  {
    "id": "brownieBar",
    "stage": 1,
    "name": "布朗尼",
    "image": "assets/s1_brownie.png",
    "solid": "水平橫放長方體",
    "model": "box",
    "target": "長方形",
    "canonicalCut": "H",
    "objective": "比較長方體的多方向截面",
    "why": "布朗尼以長方體塑形，水平或合適鉛垂平面切過內部均可得長方形；表面朱古力粒不影響形狀。",
    "polygon": [
      [
        0.17,
        0.49
      ],
      [
        0.22,
        0.43
      ],
      [
        0.82,
        0.43
      ],
      [
        0.84,
        0.68
      ],
      [
        0.78,
        0.73
      ],
      [
        0.2,
        0.73
      ]
    ],
    "source": "new"
  },
  {
    "id": "triangularSwissChocolate",
    "stage": 1,
    "name": "瑞士三角朱古力",
    "image": "assets/s1_triangular_chocolate.png",
    "solid": "橫放直三角柱（將鋸齒視作裝飾）",
    "model": "horizontalTriPrism",
    "target": "三角形",
    "canonicalCut": "V",
    "objective": "橫放直三角柱端面截面",
    "why": "把朱古力視作橫放的直三角柱，鉛垂平面若垂直柱軸而切到兩端，截面是三角形。沿柱長水平切則得到長方形。",
    "polygon": [
      [
        0.15,
        0.57
      ],
      [
        0.24,
        0.46
      ],
      [
        0.8,
        0.45
      ],
      [
        0.84,
        0.65
      ],
      [
        0.78,
        0.72
      ],
      [
        0.2,
        0.72
      ]
    ],
    "source": "new"
  },
  {
    "id": "caramelFlan",
    "stage": 1,
    "name": "焦糖布丁",
    "image": "assets/s1_caramel_flan.png",
    "solid": "直立直圓錐台",
    "model": "uprightFrustum",
    "target": "等腰梯形",
    "canonicalCut": "V",
    "center": [
      0.5,
      0.56
    ],
    "centerTolerance": 0.11,
    "objective": "理解圓錐台過軸線的截面",
    "why": "把焦糖布丁視作直圓錐台：經軸線的鉛垂切面是等腰梯形；水平截面則是圓形。",
    "polygon": [
      [
        0.31,
        0.31
      ],
      [
        0.69,
        0.31
      ],
      [
        0.81,
        0.68
      ],
      [
        0.74,
        0.8
      ],
      [
        0.25,
        0.8
      ],
      [
        0.18,
        0.68
      ]
    ],
    "source": "new"
  },
  {
    "id": "handmadeBeefBall",
    "stage": 1,
    "name": "手打牛肉丸",
    "image": "assets/s1_beef_ball.png",
    "solid": "球體",
    "model": "sphere",
    "target": "圓形",
    "canonicalCut": "H",
    "anyDirection": true,
    "objective": "辨認球體截面",
    "why": "理想化球體被任何穿過內部的平面切開，截面都是圓形。肉丸表面紋理不改變外輪廓。",
    "polygon": [
      [
        0.26,
        0.34
      ],
      [
        0.38,
        0.23
      ],
      [
        0.6,
        0.23
      ],
      [
        0.75,
        0.36
      ],
      [
        0.76,
        0.64
      ],
      [
        0.66,
        0.78
      ],
      [
        0.37,
        0.8
      ],
      [
        0.25,
        0.67
      ]
    ],
    "source": "new"
  },
  {
    "id": "greenCucumber",
    "stage": 2,
    "name": "翠綠青瓜",
    "image": "assets/s2_cucumber.png",
    "solid": "直立直圓柱",
    "model": "uprightCylinder",
    "target": "圓形",
    "canonicalCut": "H",
    "instruction": "請水平切開 ↔️！",
    "objective": "直立圓柱水平切面",
    "why": "直立圓柱的水平平面穿過內部，截面是圓形。",
    "polygon": [
      [
        0.31,
        0.27
      ],
      [
        0.4,
        0.16
      ],
      [
        0.63,
        0.16
      ],
      [
        0.68,
        0.27
      ],
      [
        0.68,
        0.71
      ],
      [
        0.59,
        0.8
      ],
      [
        0.36,
        0.8
      ],
      [
        0.3,
        0.71
      ]
    ],
    "source": "new"
  },
  {
    "id": "cantaloupeSphere",
    "stage": 2,
    "name": "哈密瓜",
    "image": "assets/s2_melon.png",
    "solid": "球體",
    "model": "sphere",
    "target": "圓形",
    "canonicalCut": "V",
    "instruction": "請鉛垂切開 ↕️！",
    "objective": "球體鉛垂切面",
    "why": "本題指定鉛垂平面；若切穿球體內部，其截面是圓形。",
    "polygon": [
      [
        0.25,
        0.24
      ],
      [
        0.36,
        0.13
      ],
      [
        0.65,
        0.13
      ],
      [
        0.77,
        0.26
      ],
      [
        0.78,
        0.64
      ],
      [
        0.67,
        0.79
      ],
      [
        0.35,
        0.8
      ],
      [
        0.22,
        0.63
      ]
    ],
    "source": "new"
  },
  {
    "id": "pineappleIceCylinder",
    "stage": 2,
    "name": "鳳梨冰柱",
    "image": "assets/s2_pineapple_ice.png",
    "solid": "橫放實心直圓柱",
    "model": "horizontalCylinderUniform",
    "target": "圓形",
    "canonicalCut": "V",
    "instruction": "請鉛垂切開 ↕️！",
    "objective": "橫放圓柱端面切割",
    "why": "冰柱水平橫放，鉛垂平面垂直其軸線時切得圓形。顏色與鳳梨紋理不屬於截面幾何。",
    "polygon": [
      [
        0.17,
        0.46
      ],
      [
        0.27,
        0.43
      ],
      [
        0.8,
        0.43
      ],
      [
        0.87,
        0.49
      ],
      [
        0.86,
        0.66
      ],
      [
        0.78,
        0.7
      ],
      [
        0.19,
        0.7
      ],
      [
        0.13,
        0.61
      ]
    ],
    "source": "new"
  },
  {
    "id": "hexChocolatePrism",
    "stage": 2,
    "name": "六角巧克力冰磚",
    "image": "assets/s2_hex_chocolate.png",
    "solid": "橫放直六角柱",
    "model": "horizontalHexPrismAlong",
    "target": "長方形",
    "canonicalCut": "H",
    "instruction": "請水平切開 ↔️！",
    "objective": "橫放六角柱沿長軸水平切面",
    "why": "橫放直六角柱沿柱長的水平平面切過內部，截面是長方形；若垂直柱軸切，則為六邊形。",
    "polygon": [
      [
        0.14,
        0.59
      ],
      [
        0.25,
        0.46
      ],
      [
        0.8,
        0.4
      ],
      [
        0.87,
        0.48
      ],
      [
        0.85,
        0.69
      ],
      [
        0.25,
        0.77
      ],
      [
        0.15,
        0.71
      ]
    ],
    "source": "new"
  },
  {
    "id": "crispyRoll",
    "stage": 2,
    "name": "響鈴卷",
    "image": "assets/s2_bean_curd_roll.png",
    "solid": "橫放圓柱（按填滿內部的外輪廓模型）",
    "model": "horizontalCylinderAlong",
    "target": "長方形",
    "canonicalCut": "H",
    "instruction": "請水平切開 ↔️！",
    "objective": "水平切開橫放圓柱",
    "why": "本題只按填滿內部的理想化直圓柱外輪廓判定：沿柱長水平切得到長方形；真實空心響鈴卷會有洞，並非實心長方形截面。",
    "polygon": [
      [
        0.12,
        0.56
      ],
      [
        0.24,
        0.46
      ],
      [
        0.8,
        0.45
      ],
      [
        0.88,
        0.51
      ],
      [
        0.85,
        0.7
      ],
      [
        0.76,
        0.75
      ],
      [
        0.2,
        0.74
      ],
      [
        0.13,
        0.68
      ]
    ],
    "source": "new"
  },
  {
    "id": "strawberrySwissUniform",
    "stage": 3,
    "name": "草莓瑞士卷",
    "image": "assets/s3_strawberry_swiss.png",
    "solid": "橫放實心直圓柱",
    "model": "horizontalCylinderUniform",
    "target": "圓形",
    "canonicalCut": "V",
    "instruction": "請切出均勻截面！",
    "objective": "橫放圓柱均勻端面",
    "why": "垂直橫放圓柱軸線切開，截面外輪廓是同樣大小的圓形。草莓奶油的螺旋是內部紋理，不是螺旋形截面。",
    "polygon": [
      [
        0.1,
        0.39
      ],
      [
        0.22,
        0.27
      ],
      [
        0.75,
        0.24
      ],
      [
        0.84,
        0.34
      ],
      [
        0.83,
        0.63
      ],
      [
        0.72,
        0.73
      ],
      [
        0.24,
        0.72
      ],
      [
        0.1,
        0.63
      ]
    ],
    "source": "new"
  },
  {
    "id": "rainbowTriPrism",
    "stage": 3,
    "name": "彩虹千層三角蛋糕",
    "image": "assets/s3_rainbow_cake.png",
    "solid": "模具塑形的直立直三角柱",
    "model": "verticalTriPrismUniform",
    "target": "三角形",
    "canonicalCut": "H",
    "instruction": "請切出均勻截面！",
    "objective": "直立三角柱水平均勻截面",
    "why": "若蛋糕以直立直三角柱模具成形，水平截面始終是大小相同的三角形；彩虹色只代表蛋糕內部層次。",
    "polygon": [
      [
        0.17,
        0.34
      ],
      [
        0.68,
        0.23
      ],
      [
        0.83,
        0.36
      ],
      [
        0.82,
        0.76
      ],
      [
        0.23,
        0.78
      ]
    ],
    "source": "new"
  },
  {
    "id": "honeySquareBar",
    "stage": 3,
    "name": "長條蜂蜜蛋糕",
    "image": "assets/s3_honey_cake.png",
    "solid": "橫放長方體（兩端是正方形）",
    "model": "horizontalSquareBarUniform",
    "target": "正方形",
    "canonicalCut": "V",
    "instruction": "請切出均勻截面！",
    "objective": "橫放正方端面的長方柱均勻截面",
    "why": "本題將蜂蜜蛋糕視為兩端正方形的長條方柱，沿長軸不同位置用鉛垂平面垂直切開，截面都是全等的正方形。",
    "polygon": [
      [
        0.15,
        0.36
      ],
      [
        0.26,
        0.29
      ],
      [
        0.8,
        0.3
      ],
      [
        0.86,
        0.41
      ],
      [
        0.86,
        0.67
      ],
      [
        0.79,
        0.76
      ],
      [
        0.17,
        0.74
      ]
    ],
    "source": "new"
  },
  {
    "id": "waferRing",
    "stage": 3,
    "name": "夾心卷心酥",
    "image": "assets/s3_wafer_roll.png",
    "solid": "橫放空心直圓柱",
    "model": "horizontalHollowCylinderUniform",
    "target": "圓環",
    "canonicalCut": "V",
    "instruction": "請切出均勻截面！",
    "objective": "空心圓柱均勻圓環截面",
    "why": "把卷心酥視為橫放、空心而且內徑固定的直圓柱，垂直柱軸切開可得兩個同心圓之間的圓環。若內部完全填滿，才會是實心圓形。",
    "polygon": [
      [
        0.13,
        0.5
      ],
      [
        0.22,
        0.4
      ],
      [
        0.8,
        0.39
      ],
      [
        0.88,
        0.46
      ],
      [
        0.88,
        0.66
      ],
      [
        0.78,
        0.74
      ],
      [
        0.22,
        0.75
      ],
      [
        0.1,
        0.66
      ]
    ],
    "source": "new"
  },
  {
    "id": "baumkuchenUpright",
    "stage": 3,
    "name": "直立年輪蛋糕",
    "image": "assets/s3_baumkuchen.png",
    "solid": "直立實心圓柱",
    "model": "uprightCylinderUniform",
    "target": "圓形",
    "canonicalCut": "H",
    "instruction": "請切出均勻截面！",
    "objective": "直立實心圓柱均勻截面",
    "why": "直立實心圓柱在不同高度的水平截面都是大小相同的圓形；年輪的同心紋只屬於內部圖案。",
    "polygon": [
      [
        0.32,
        0.23
      ],
      [
        0.43,
        0.18
      ],
      [
        0.65,
        0.18
      ],
      [
        0.74,
        0.28
      ],
      [
        0.74,
        0.73
      ],
      [
        0.63,
        0.82
      ],
      [
        0.4,
        0.81
      ],
      [
        0.31,
        0.71
      ]
    ],
    "source": "new"
  }
]
);
