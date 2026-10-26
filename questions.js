/* 150 筆完整題目資料，逐筆列明幾何模型、尺寸、方向、切面及答案。 */
const THEMES=[
  [
    "田園蔬果廚房",
    [
      "青瓜",
      "甘筍凍",
      "蕃茄啫喱",
      "粟米糕",
      "南瓜糕",
      "菠菜卷",
      "甜椒糕",
      "紫椰菜凍",
      "秋葵卷",
      "香草糕",
      "西瓜糖",
      "車厘子球",
      "蘿蔔糕",
      "青豆卷",
      "番薯糕"
    ]
  ],
  [
    "夢幻甜品工房",
    [
      "雲呢拿布甸",
      "草莓慕絲",
      "藍莓塔",
      "朱古力條",
      "檸檬啫喱",
      "抹茶卷",
      "開心果糕",
      "棉花糖磚",
      "蜜桃批",
      "焦糖餅",
      "椰香糖",
      "士多啤梨球",
      "奶油蛋糕",
      "紅豆糕",
      "杏仁脆餅"
    ]
  ],
  [
    "日式料理小店",
    [
      "玉子燒",
      "抹茶羊羹",
      "豆腐糕",
      "紫菜卷",
      "飯糰模具糕",
      "壽司啫喱",
      "栗子和菓子",
      "柚子糕",
      "黑芝麻凍",
      "櫻花羊羹",
      "焙茶糖",
      "蜜柑球",
      "綠茶米糕",
      "海苔糕",
      "南瓜煮物糕"
    ]
  ],
  [
    "意式美食派對",
    [
      "意式芝士凍",
      "羅勒糕",
      "番茄凍",
      "橄欖麵包",
      "芝士塔",
      "香草奶凍",
      "檸檬冰糕",
      "焗麵團",
      "提拉米蘇磚",
      "松露糕",
      "榛子糖",
      "蜜瓜球",
      "芝士布甸",
      "香菇糕",
      "薄餅模具糕"
    ]
  ],
  [
    "歐陸烘焙工房",
    [
      "牛油麵包",
      "肉桂糕",
      "蘋果撻",
      "杏仁曲奇",
      "蜂蜜蛋糕",
      "栗子卷",
      "黑麥糕",
      "焦糖布甸",
      "榛果塔",
      "奶酥糕",
      "糖霜糖",
      "葡萄球",
      "乳酪蛋糕",
      "南瓜麵包",
      "巧克力磚"
    ]
  ],
  [
    "港式茶餐廳",
    [
      "奶茶啫喱",
      "菠蘿包糕",
      "蛋撻布甸",
      "西多士糕",
      "沙嗲糕",
      "鴛鴦凍",
      "紅豆冰糕",
      "咖央糕",
      "椰汁糕",
      "牛油方包",
      "麥芽糖",
      "冬瓜球",
      "芝麻卷",
      "馬蹄糕",
      "鮮奶燉蛋糕"
    ]
  ],
  [
    "夏日冰品研究所",
    [
      "冰藍雪糕",
      "芒果冰磚",
      "荔枝冰糕",
      "蜜桃冰柱",
      "西柚冰塔",
      "薄荷冰卷",
      "奇異果冰",
      "海鹽冰糕",
      "楊枝甘露凍",
      "葡萄雪條",
      "雪花糖",
      "哈密瓜冰球",
      "菠蘿冰糕",
      "椰奶雪糕",
      "莓果雪磚"
    ]
  ],
  [
    "中式點心茶樓",
    [
      "蝦餃啫喱",
      "燒賣糕",
      "糯米卷",
      "桂花糕",
      "南瓜包糕",
      "蓮蓉卷",
      "馬拉糕",
      "芝麻千層糕",
      "蘿蔔絲糕",
      "紅棗糕",
      "冰糖糖果",
      "龍眼球",
      "豆沙糕",
      "綠豆糕",
      "芋頭糕"
    ]
  ],
  [
    "火鍋食材工坊",
    [
      "魚丸凍",
      "豆腐卷",
      "牛肉糕",
      "蘿蔔糕卷",
      "鮮菇凍",
      "海鮮卷",
      "冬瓜糕",
      "蟹柳糕",
      "竹笙糕",
      "芝士丸糕",
      "紫薯糖",
      "魚蛋球",
      "花膠糕",
      "豆卜糕",
      "蓮藕糕"
    ]
  ],
  [
    "太空創意餐廳",
    [
      "銀河果凍",
      "火星慕絲",
      "星雲脆餅",
      "月球糖",
      "彗星蛋糕",
      "宇宙卷",
      "土星甜糕",
      "隕石糕",
      "極光布甸",
      "星際薄餅",
      "量子糖",
      "小行星球",
      "太陽奶凍",
      "黑洞糕",
      "星光方糕"
    ]
  ]
];
const SHAPES=["圓形","三角形","長方形","正方形","梯形","五邊形","六邊形","八邊形"];
const QUESTIONS=[
  {
    "id": "M01-Q01",
    "setId": 1,
    "level": 1,
    "foodId": "food-1-1",
    "foodName": "青瓜",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 0.88,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 1.7,
      "topRatio": 0.34,
      "triangleVariant": 0,
      "rotation": 0,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察青瓜的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認直立圓柱的水平截面",
    "visualStyle": {
      "palette": 0,
      "material": "glossy",
      "theme": "田園蔬果廚房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M01-Q02",
    "setId": 1,
    "level": 1,
    "foodId": "food-1-2",
    "foodName": "甘筍凍",
    "solidType": "pyramid4",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.06,
      "topRatio": 0.34,
      "triangleVariant": 1,
      "rotation": 0.2617993877991494,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察甘筍凍的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "正方形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是正方形；請以切面正視形狀為準。",
    "learningObjective": "辨認正四角錐與底面平行的截面",
    "visualStyle": {
      "palette": 1,
      "material": "jelly",
      "theme": "田園蔬果廚房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M01-Q03",
    "setId": 1,
    "level": 1,
    "foodId": "food-1-3",
    "foodName": "蕃茄啫喱",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.01,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.42,
      "topRatio": 0.34,
      "triangleVariant": 2,
      "rotation": 0.5235987755982988,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察蕃茄啫喱的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認橫放圓柱與軸垂直的截面",
    "visualStyle": {
      "palette": 2,
      "material": "cake",
      "theme": "田園蔬果廚房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M01-Q04",
    "setId": 1,
    "level": 1,
    "foodId": "food-1-4",
    "foodName": "粟米糕",
    "solidType": "cone",
    "dimensions": {
      "radius": 1.075,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 1.88,
      "topRatio": 0.34,
      "triangleVariant": 0,
      "rotation": 0.7853981633974483,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察粟米糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是三角形；請以切面正視形狀為準。",
    "learningObjective": "認識通過圓錐軸線的切割",
    "visualStyle": {
      "palette": 3,
      "material": "ice",
      "theme": "田園蔬果廚房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M01-Q05",
    "setId": 1,
    "level": 1,
    "foodId": "food-1-5",
    "foodName": "南瓜糕",
    "solidType": "sphere",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 2.24,
      "topRatio": 0.34,
      "triangleVariant": 1,
      "rotation": 0,
      "offsetRatio": 0.15,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察南瓜糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V",
      "A"
    ],
    "shownCutPlane": {
      "direction": "A",
      "angle": 0,
      "offset": 0.171
    },
    "acceptedCutPlanes": [
      {
        "direction": "A",
        "angle": 0,
        "offset": 0.171
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "球體只要平面穿過內部，真正的截面都是圓形；斜看可能像橢圓。",
    "learningObjective": "球體非中心截面仍是圓形",
    "visualStyle": {
      "palette": 4,
      "material": "glossy",
      "theme": "田園蔬果廚房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "A"
  },
  {
    "id": "M01-Q06",
    "setId": 1,
    "level": 2,
    "foodId": "food-1-6",
    "foodName": "菠菜卷",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.205,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.205,
      "height": 1.7,
      "topRatio": 0.34,
      "triangleVariant": 2,
      "rotation": 0.2617993877991494,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為圓形。",
    "learningObjective": "均勻截面：圓柱",
    "visualStyle": {
      "palette": 5,
      "material": "jelly",
      "theme": "田園蔬果廚房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M01-Q07",
    "setId": 1,
    "level": 2,
    "foodId": "food-1-7",
    "foodName": "甜椒糕",
    "solidType": "prism3",
    "dimensions": {
      "radius": 0.88,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.88,
      "height": 2.06,
      "topRatio": 0.34,
      "triangleVariant": 0,
      "rotation": 0.5235987755982988,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為三角形。",
    "learningObjective": "均勻截面：橫放三角柱",
    "visualStyle": {
      "palette": 6,
      "material": "cake",
      "theme": "田園蔬果廚房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M01-Q08",
    "setId": 1,
    "level": 2,
    "foodId": "food-1-8",
    "foodName": "紫椰菜凍",
    "solidType": "prismTrapezoid",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.42,
      "topRatio": 0.34,
      "triangleVariant": 1,
      "rotation": 0.7853981633974483,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為梯形。",
    "learningObjective": "均勻截面：梯形角柱",
    "visualStyle": {
      "palette": 7,
      "material": "ice",
      "theme": "田園蔬果廚房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M01-Q09",
    "setId": 1,
    "level": 2,
    "foodId": "food-1-9",
    "foodName": "秋葵卷",
    "solidType": "prism5",
    "dimensions": {
      "radius": 1.01,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.01,
      "height": 1.88,
      "topRatio": 0.34,
      "triangleVariant": 2,
      "rotation": 0,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "五邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為五邊形。",
    "learningObjective": "均勻截面：橫放五角柱",
    "visualStyle": {
      "palette": 8,
      "material": "glossy",
      "theme": "田園蔬果廚房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M01-Q10",
    "setId": 1,
    "level": 2,
    "foodId": "food-1-10",
    "foodName": "香草糕",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.075,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 2.24,
      "topRatio": 0.34,
      "triangleVariant": 0,
      "rotation": 0.2617993877991494,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "六邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為六邊形。",
    "learningObjective": "均勻截面：六角柱",
    "visualStyle": {
      "palette": 0,
      "material": "jelly",
      "theme": "田園蔬果廚房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M01-Q11",
    "setId": 1,
    "level": 3,
    "foodId": "food-1-11",
    "foodName": "西瓜糖",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 1.7,
      "topRatio": 0.34,
      "triangleVariant": 1,
      "rotation": 0.5235987755982988,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱沿柱長的水平截面",
    "visualStyle": {
      "palette": 1,
      "material": "cake",
      "theme": "田園蔬果廚房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M01-Q12",
    "setId": 1,
    "level": 3,
    "foodId": "food-1-12",
    "foodName": "車厘子球",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.205,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.205,
      "height": 2.06,
      "topRatio": 0.34,
      "triangleVariant": 2,
      "rotation": 0.7853981633974483,
      "offsetRatio": 0,
      "axisAngle": 90
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 90,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 90,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱包含軸線的鉛垂截面",
    "visualStyle": {
      "palette": 2,
      "material": "ice",
      "theme": "田園蔬果廚房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M01-Q13",
    "setId": 1,
    "level": 3,
    "foodId": "food-1-13",
    "foodName": "蘿蔔糕",
    "solidType": "frustum",
    "dimensions": {
      "radius": 0.88,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 2.42,
      "topRatio": 0.34,
      "triangleVariant": 0,
      "rotation": 0,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：梯形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": "梯形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是梯形；請以切面正視形狀為準。",
    "learningObjective": "直圓錐台經軸線切割的截面",
    "visualStyle": {
      "palette": 3,
      "material": "glossy",
      "theme": "田園蔬果廚房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M01-Q14",
    "setId": 1,
    "level": 3,
    "foodId": "food-1-14",
    "foodName": "青豆卷",
    "solidType": "pyramid5",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 1.88,
      "topRatio": 0.34,
      "triangleVariant": 1,
      "rotation": 0.2617993877991494,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：圓形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "圓形",
    "isPossible": false,
    "rejectionReason": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "explanation": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "learningObjective": "多面體不能切出圓形",
    "visualStyle": {
      "palette": 4,
      "material": "jelly",
      "theme": "田園蔬果廚房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M01-Q15",
    "setId": 1,
    "level": 3,
    "foodId": "food-1-15",
    "foodName": "番薯糕",
    "solidType": "cube",
    "dimensions": {
      "radius": 1.01,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.24,
      "topRatio": 0.34,
      "triangleVariant": 2,
      "rotation": 0.5235987755982988,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：八邊形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "八邊形",
    "isPossible": false,
    "rejectionReason": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "explanation": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "learningObjective": "正方體不可能有八邊形截面",
    "visualStyle": {
      "palette": 5,
      "material": "cake",
      "theme": "田園蔬果廚房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M02-Q01",
    "setId": 2,
    "level": 1,
    "foodId": "food-2-1",
    "foodName": "雲呢拿布甸",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.42,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 1,
      "rotation": 0.08726646259971647,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察雲呢拿布甸的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認直立圓柱的水平截面",
    "visualStyle": {
      "palette": 1,
      "material": "jelly",
      "theme": "夢幻甜品工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M02-Q02",
    "setId": 2,
    "level": 1,
    "foodId": "food-2-2",
    "foodName": "草莓慕絲",
    "solidType": "pyramid4",
    "dimensions": {
      "radius": 1.01,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 1.88,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 2,
      "rotation": 0.3490658503988659,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察草莓慕絲的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "正方形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是正方形；請以切面正視形狀為準。",
    "learningObjective": "辨認正四角錐與底面平行的截面",
    "visualStyle": {
      "palette": 2,
      "material": "cake",
      "theme": "夢幻甜品工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M02-Q03",
    "setId": 2,
    "level": 1,
    "foodId": "food-2-3",
    "foodName": "藍莓塔",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.075,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.075,
      "height": 2.24,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 0,
      "rotation": 0.6108652381980153,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察藍莓塔的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認橫放圓柱與軸垂直的截面",
    "visualStyle": {
      "palette": 3,
      "material": "ice",
      "theme": "夢幻甜品工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M02-Q04",
    "setId": 2,
    "level": 1,
    "foodId": "food-2-4",
    "foodName": "朱古力條",
    "solidType": "cone",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 1.7,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 1,
      "rotation": 0.8726646259971648,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察朱古力條的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是三角形；請以切面正視形狀為準。",
    "learningObjective": "認識通過圓錐軸線的切割",
    "visualStyle": {
      "palette": 4,
      "material": "glossy",
      "theme": "夢幻甜品工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M02-Q05",
    "setId": 2,
    "level": 1,
    "foodId": "food-2-5",
    "foodName": "檸檬啫喱",
    "solidType": "sphere",
    "dimensions": {
      "radius": 1.205,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.205,
      "height": 2.06,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 2,
      "rotation": 0.08726646259971647,
      "offsetRatio": 0.22499999999999998,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察檸檬啫喱的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V",
      "A"
    ],
    "shownCutPlane": {
      "direction": "A",
      "angle": 0,
      "offset": 0.271125
    },
    "acceptedCutPlanes": [
      {
        "direction": "A",
        "angle": 0,
        "offset": 0.271125
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "球體只要平面穿過內部，真正的截面都是圓形；斜看可能像橢圓。",
    "learningObjective": "球體非中心截面仍是圓形",
    "visualStyle": {
      "palette": 5,
      "material": "jelly",
      "theme": "夢幻甜品工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "A"
  },
  {
    "id": "M02-Q06",
    "setId": 2,
    "level": 2,
    "foodId": "food-2-6",
    "foodName": "抹茶卷",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 0.88,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 2.42,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 0,
      "rotation": 0.3490658503988659,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為圓形。",
    "learningObjective": "均勻截面：圓柱",
    "visualStyle": {
      "palette": 6,
      "material": "cake",
      "theme": "夢幻甜品工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M02-Q07",
    "setId": 2,
    "level": 2,
    "foodId": "food-2-7",
    "foodName": "開心果糕",
    "solidType": "prism3",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 1.88,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 1,
      "rotation": 0.6108652381980153,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為三角形。",
    "learningObjective": "均勻截面：橫放三角柱",
    "visualStyle": {
      "palette": 7,
      "material": "ice",
      "theme": "夢幻甜品工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M02-Q08",
    "setId": 2,
    "level": 2,
    "foodId": "food-2-8",
    "foodName": "棉花糖磚",
    "solidType": "prismTrapezoid",
    "dimensions": {
      "radius": 1.01,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.24,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 2,
      "rotation": 0.8726646259971648,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為梯形。",
    "learningObjective": "均勻截面：梯形角柱",
    "visualStyle": {
      "palette": 8,
      "material": "glossy",
      "theme": "夢幻甜品工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M02-Q09",
    "setId": 2,
    "level": 2,
    "foodId": "food-2-9",
    "foodName": "蜜桃批",
    "solidType": "prism5",
    "dimensions": {
      "radius": 1.075,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.075,
      "height": 1.7,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 0,
      "rotation": 0.08726646259971647,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "五邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為五邊形。",
    "learningObjective": "均勻截面：橫放五角柱",
    "visualStyle": {
      "palette": 0,
      "material": "jelly",
      "theme": "夢幻甜品工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M02-Q10",
    "setId": 2,
    "level": 2,
    "foodId": "food-2-10",
    "foodName": "焦糖餅",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 2.06,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 1,
      "rotation": 0.3490658503988659,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "六邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為六邊形。",
    "learningObjective": "均勻截面：六角柱",
    "visualStyle": {
      "palette": 1,
      "material": "cake",
      "theme": "夢幻甜品工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M02-Q11",
    "setId": 2,
    "level": 3,
    "foodId": "food-2-11",
    "foodName": "椰香糖",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.205,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.205,
      "height": 2.42,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 2,
      "rotation": 0.6108652381980153,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱沿柱長的水平截面",
    "visualStyle": {
      "palette": 2,
      "material": "ice",
      "theme": "夢幻甜品工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M02-Q12",
    "setId": 2,
    "level": 3,
    "foodId": "food-2-12",
    "foodName": "士多啤梨球",
    "solidType": "prism6",
    "dimensions": {
      "radius": 0.88,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.88,
      "height": 1.88,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 0,
      "rotation": 0.8726646259971648,
      "offsetRatio": 0,
      "axisAngle": 90
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 90,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 90,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱包含軸線的鉛垂截面",
    "visualStyle": {
      "palette": 3,
      "material": "glossy",
      "theme": "夢幻甜品工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M02-Q13",
    "setId": 2,
    "level": 3,
    "foodId": "food-2-13",
    "foodName": "奶油蛋糕",
    "solidType": "frustum",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.24,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 1,
      "rotation": 0.08726646259971647,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：梯形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": "梯形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是梯形；請以切面正視形狀為準。",
    "learningObjective": "直圓錐台經軸線切割的截面",
    "visualStyle": {
      "palette": 4,
      "material": "jelly",
      "theme": "夢幻甜品工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M02-Q14",
    "setId": 2,
    "level": 3,
    "foodId": "food-2-14",
    "foodName": "紅豆糕",
    "solidType": "pyramid5",
    "dimensions": {
      "radius": 1.01,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 1.7,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 2,
      "rotation": 0.3490658503988659,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：圓形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "圓形",
    "isPossible": false,
    "rejectionReason": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "explanation": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "learningObjective": "多面體不能切出圓形",
    "visualStyle": {
      "palette": 5,
      "material": "cake",
      "theme": "夢幻甜品工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M02-Q15",
    "setId": 2,
    "level": 3,
    "foodId": "food-2-15",
    "foodName": "杏仁脆餅",
    "solidType": "cube",
    "dimensions": {
      "radius": 1.075,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 2.06,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 0,
      "rotation": 0.6108652381980153,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：八邊形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "八邊形",
    "isPossible": false,
    "rejectionReason": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "explanation": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "learningObjective": "正方體不可能有八邊形截面",
    "visualStyle": {
      "palette": 6,
      "material": "ice",
      "theme": "夢幻甜品工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M03-Q01",
    "setId": 3,
    "level": 1,
    "foodId": "food-3-1",
    "foodName": "玉子燒",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.01,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.24,
      "topRatio": 0.5,
      "triangleVariant": 2,
      "rotation": 0.17453292519943295,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察玉子燒的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認直立圓柱的水平截面",
    "visualStyle": {
      "palette": 2,
      "material": "cake",
      "theme": "日式料理小店"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M03-Q02",
    "setId": 3,
    "level": 1,
    "foodId": "food-3-2",
    "foodName": "抹茶羊羹",
    "solidType": "pyramid4",
    "dimensions": {
      "radius": 1.075,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 1.7,
      "topRatio": 0.5,
      "triangleVariant": 0,
      "rotation": 0.4363323129985824,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察抹茶羊羹的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "正方形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是正方形；請以切面正視形狀為準。",
    "learningObjective": "辨認正四角錐與底面平行的截面",
    "visualStyle": {
      "palette": 3,
      "material": "ice",
      "theme": "日式料理小店"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M03-Q03",
    "setId": 3,
    "level": 1,
    "foodId": "food-3-3",
    "foodName": "豆腐糕",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 2.06,
      "topRatio": 0.5,
      "triangleVariant": 1,
      "rotation": 0.6981317007977318,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察豆腐糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認橫放圓柱與軸垂直的截面",
    "visualStyle": {
      "palette": 4,
      "material": "glossy",
      "theme": "日式料理小店"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M03-Q04",
    "setId": 3,
    "level": 1,
    "foodId": "food-3-4",
    "foodName": "紫菜卷",
    "solidType": "cone",
    "dimensions": {
      "radius": 1.205,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.205,
      "height": 2.42,
      "topRatio": 0.5,
      "triangleVariant": 2,
      "rotation": 0.9599310885968811,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察紫菜卷的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是三角形；請以切面正視形狀為準。",
    "learningObjective": "認識通過圓錐軸線的切割",
    "visualStyle": {
      "palette": 5,
      "material": "jelly",
      "theme": "日式料理小店"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M03-Q05",
    "setId": 3,
    "level": 1,
    "foodId": "food-3-5",
    "foodName": "飯糰模具糕",
    "solidType": "sphere",
    "dimensions": {
      "radius": 0.88,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 1.88,
      "topRatio": 0.5,
      "triangleVariant": 0,
      "rotation": 0.17453292519943295,
      "offsetRatio": 0.3,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察飯糰模具糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V",
      "A"
    ],
    "shownCutPlane": {
      "direction": "A",
      "angle": 0,
      "offset": 0.264
    },
    "acceptedCutPlanes": [
      {
        "direction": "A",
        "angle": 0,
        "offset": 0.264
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "球體只要平面穿過內部，真正的截面都是圓形；斜看可能像橢圓。",
    "learningObjective": "球體非中心截面仍是圓形",
    "visualStyle": {
      "palette": 6,
      "material": "cake",
      "theme": "日式料理小店"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "A"
  },
  {
    "id": "M03-Q06",
    "setId": 3,
    "level": 2,
    "foodId": "food-3-6",
    "foodName": "壽司啫喱",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.24,
      "topRatio": 0.5,
      "triangleVariant": 1,
      "rotation": 0.4363323129985824,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為圓形。",
    "learningObjective": "均勻截面：圓柱",
    "visualStyle": {
      "palette": 7,
      "material": "ice",
      "theme": "日式料理小店"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M03-Q07",
    "setId": 3,
    "level": 2,
    "foodId": "food-3-7",
    "foodName": "栗子和菓子",
    "solidType": "prism3",
    "dimensions": {
      "radius": 1.01,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.01,
      "height": 1.7,
      "topRatio": 0.5,
      "triangleVariant": 2,
      "rotation": 0.6981317007977318,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為三角形。",
    "learningObjective": "均勻截面：橫放三角柱",
    "visualStyle": {
      "palette": 8,
      "material": "glossy",
      "theme": "日式料理小店"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M03-Q08",
    "setId": 3,
    "level": 2,
    "foodId": "food-3-8",
    "foodName": "柚子糕",
    "solidType": "prismTrapezoid",
    "dimensions": {
      "radius": 1.075,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 2.06,
      "topRatio": 0.5,
      "triangleVariant": 0,
      "rotation": 0.9599310885968811,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為梯形。",
    "learningObjective": "均勻截面：梯形角柱",
    "visualStyle": {
      "palette": 0,
      "material": "jelly",
      "theme": "日式料理小店"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M03-Q09",
    "setId": 3,
    "level": 2,
    "foodId": "food-3-9",
    "foodName": "黑芝麻凍",
    "solidType": "prism5",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 2.42,
      "topRatio": 0.5,
      "triangleVariant": 1,
      "rotation": 0.17453292519943295,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "五邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為五邊形。",
    "learningObjective": "均勻截面：橫放五角柱",
    "visualStyle": {
      "palette": 1,
      "material": "cake",
      "theme": "日式料理小店"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M03-Q10",
    "setId": 3,
    "level": 2,
    "foodId": "food-3-10",
    "foodName": "櫻花羊羹",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.205,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.205,
      "height": 1.88,
      "topRatio": 0.5,
      "triangleVariant": 2,
      "rotation": 0.4363323129985824,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "六邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為六邊形。",
    "learningObjective": "均勻截面：六角柱",
    "visualStyle": {
      "palette": 2,
      "material": "ice",
      "theme": "日式料理小店"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M03-Q11",
    "setId": 3,
    "level": 3,
    "foodId": "food-3-11",
    "foodName": "焙茶糖",
    "solidType": "prism6",
    "dimensions": {
      "radius": 0.88,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.88,
      "height": 2.24,
      "topRatio": 0.5,
      "triangleVariant": 0,
      "rotation": 0.6981317007977318,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱沿柱長的水平截面",
    "visualStyle": {
      "palette": 3,
      "material": "glossy",
      "theme": "日式料理小店"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M03-Q12",
    "setId": 3,
    "level": 3,
    "foodId": "food-3-12",
    "foodName": "蜜柑球",
    "solidType": "prism6",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 1.7,
      "topRatio": 0.5,
      "triangleVariant": 1,
      "rotation": 0.9599310885968811,
      "offsetRatio": 0,
      "axisAngle": 90
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 90,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 90,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱包含軸線的鉛垂截面",
    "visualStyle": {
      "palette": 4,
      "material": "jelly",
      "theme": "日式料理小店"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M03-Q13",
    "setId": 3,
    "level": 3,
    "foodId": "food-3-13",
    "foodName": "綠茶米糕",
    "solidType": "frustum",
    "dimensions": {
      "radius": 1.01,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.06,
      "topRatio": 0.5,
      "triangleVariant": 2,
      "rotation": 0.17453292519943295,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：梯形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": "梯形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是梯形；請以切面正視形狀為準。",
    "learningObjective": "直圓錐台經軸線切割的截面",
    "visualStyle": {
      "palette": 5,
      "material": "cake",
      "theme": "日式料理小店"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M03-Q14",
    "setId": 3,
    "level": 3,
    "foodId": "food-3-14",
    "foodName": "海苔糕",
    "solidType": "pyramid5",
    "dimensions": {
      "radius": 1.075,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 2.42,
      "topRatio": 0.5,
      "triangleVariant": 0,
      "rotation": 0.4363323129985824,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：圓形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "圓形",
    "isPossible": false,
    "rejectionReason": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "explanation": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "learningObjective": "多面體不能切出圓形",
    "visualStyle": {
      "palette": 6,
      "material": "ice",
      "theme": "日式料理小店"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M03-Q15",
    "setId": 3,
    "level": 3,
    "foodId": "food-3-15",
    "foodName": "南瓜煮物糕",
    "solidType": "cube",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 1.88,
      "topRatio": 0.5,
      "triangleVariant": 1,
      "rotation": 0.6981317007977318,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：八邊形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "八邊形",
    "isPossible": false,
    "rejectionReason": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "explanation": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "learningObjective": "正方體不可能有八邊形截面",
    "visualStyle": {
      "palette": 7,
      "material": "glossy",
      "theme": "日式料理小店"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M04-Q01",
    "setId": 4,
    "level": 1,
    "foodId": "food-4-1",
    "foodName": "意式芝士凍",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.075,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 2.06,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 0,
      "rotation": 0.2617993877991494,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察意式芝士凍的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認直立圓柱的水平截面",
    "visualStyle": {
      "palette": 3,
      "material": "ice",
      "theme": "意式美食派對"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M04-Q02",
    "setId": 4,
    "level": 1,
    "foodId": "food-4-2",
    "foodName": "羅勒糕",
    "solidType": "pyramid4",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 2.42,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 1,
      "rotation": 0.5235987755982988,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察羅勒糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "正方形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是正方形；請以切面正視形狀為準。",
    "learningObjective": "辨認正四角錐與底面平行的截面",
    "visualStyle": {
      "palette": 4,
      "material": "glossy",
      "theme": "意式美食派對"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M04-Q03",
    "setId": 4,
    "level": 1,
    "foodId": "food-4-3",
    "foodName": "番茄凍",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.205,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.205,
      "height": 1.88,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 2,
      "rotation": 0.7853981633974483,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察番茄凍的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認橫放圓柱與軸垂直的截面",
    "visualStyle": {
      "palette": 5,
      "material": "jelly",
      "theme": "意式美食派對"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M04-Q04",
    "setId": 4,
    "level": 1,
    "foodId": "food-4-4",
    "foodName": "橄欖麵包",
    "solidType": "cone",
    "dimensions": {
      "radius": 0.88,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 2.24,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 0,
      "rotation": 0,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察橄欖麵包的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是三角形；請以切面正視形狀為準。",
    "learningObjective": "認識通過圓錐軸線的切割",
    "visualStyle": {
      "palette": 6,
      "material": "cake",
      "theme": "意式美食派對"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M04-Q05",
    "setId": 4,
    "level": 1,
    "foodId": "food-4-5",
    "foodName": "芝士塔",
    "solidType": "sphere",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 1.7,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 1,
      "rotation": 0.2617993877991494,
      "offsetRatio": 0.15,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察芝士塔的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V",
      "A"
    ],
    "shownCutPlane": {
      "direction": "A",
      "angle": 0,
      "offset": 0.14175000000000001
    },
    "acceptedCutPlanes": [
      {
        "direction": "A",
        "angle": 0,
        "offset": 0.14175000000000001
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "球體只要平面穿過內部，真正的截面都是圓形；斜看可能像橢圓。",
    "learningObjective": "球體非中心截面仍是圓形",
    "visualStyle": {
      "palette": 7,
      "material": "ice",
      "theme": "意式美食派對"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "A"
  },
  {
    "id": "M04-Q06",
    "setId": 4,
    "level": 2,
    "foodId": "food-4-6",
    "foodName": "香草奶凍",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.01,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.06,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 2,
      "rotation": 0.5235987755982988,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為圓形。",
    "learningObjective": "均勻截面：圓柱",
    "visualStyle": {
      "palette": 8,
      "material": "glossy",
      "theme": "意式美食派對"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M04-Q07",
    "setId": 4,
    "level": 2,
    "foodId": "food-4-7",
    "foodName": "檸檬冰糕",
    "solidType": "prism3",
    "dimensions": {
      "radius": 1.075,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.075,
      "height": 2.42,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 0,
      "rotation": 0.7853981633974483,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為三角形。",
    "learningObjective": "均勻截面：橫放三角柱",
    "visualStyle": {
      "palette": 0,
      "material": "jelly",
      "theme": "意式美食派對"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M04-Q08",
    "setId": 4,
    "level": 2,
    "foodId": "food-4-8",
    "foodName": "焗麵團",
    "solidType": "prismTrapezoid",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 1.88,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 1,
      "rotation": 0,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為梯形。",
    "learningObjective": "均勻截面：梯形角柱",
    "visualStyle": {
      "palette": 1,
      "material": "cake",
      "theme": "意式美食派對"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M04-Q09",
    "setId": 4,
    "level": 2,
    "foodId": "food-4-9",
    "foodName": "提拉米蘇磚",
    "solidType": "prism5",
    "dimensions": {
      "radius": 1.205,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.205,
      "height": 2.24,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 2,
      "rotation": 0.2617993877991494,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "五邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為五邊形。",
    "learningObjective": "均勻截面：橫放五角柱",
    "visualStyle": {
      "palette": 2,
      "material": "ice",
      "theme": "意式美食派對"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M04-Q10",
    "setId": 4,
    "level": 2,
    "foodId": "food-4-10",
    "foodName": "松露糕",
    "solidType": "prism6",
    "dimensions": {
      "radius": 0.88,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 1.7,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 0,
      "rotation": 0.5235987755982988,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "六邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為六邊形。",
    "learningObjective": "均勻截面：六角柱",
    "visualStyle": {
      "palette": 3,
      "material": "glossy",
      "theme": "意式美食派對"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M04-Q11",
    "setId": 4,
    "level": 3,
    "foodId": "food-4-11",
    "foodName": "榛子糖",
    "solidType": "prism6",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.06,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 1,
      "rotation": 0.7853981633974483,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱沿柱長的水平截面",
    "visualStyle": {
      "palette": 4,
      "material": "jelly",
      "theme": "意式美食派對"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M04-Q12",
    "setId": 4,
    "level": 3,
    "foodId": "food-4-12",
    "foodName": "蜜瓜球",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.01,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.42,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 2,
      "rotation": 0,
      "offsetRatio": 0,
      "axisAngle": 90
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 90,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 90,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱包含軸線的鉛垂截面",
    "visualStyle": {
      "palette": 5,
      "material": "cake",
      "theme": "意式美食派對"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M04-Q13",
    "setId": 4,
    "level": 3,
    "foodId": "food-4-13",
    "foodName": "芝士布甸",
    "solidType": "frustum",
    "dimensions": {
      "radius": 1.075,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 1.88,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 0,
      "rotation": 0.2617993877991494,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：梯形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": "梯形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是梯形；請以切面正視形狀為準。",
    "learningObjective": "直圓錐台經軸線切割的截面",
    "visualStyle": {
      "palette": 6,
      "material": "ice",
      "theme": "意式美食派對"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M04-Q14",
    "setId": 4,
    "level": 3,
    "foodId": "food-4-14",
    "foodName": "香菇糕",
    "solidType": "pyramid5",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 2.24,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 1,
      "rotation": 0.5235987755982988,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：圓形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "圓形",
    "isPossible": false,
    "rejectionReason": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "explanation": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "learningObjective": "多面體不能切出圓形",
    "visualStyle": {
      "palette": 7,
      "material": "glossy",
      "theme": "意式美食派對"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M04-Q15",
    "setId": 4,
    "level": 3,
    "foodId": "food-4-15",
    "foodName": "薄餅模具糕",
    "solidType": "cube",
    "dimensions": {
      "radius": 1.205,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.205,
      "height": 1.7,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 2,
      "rotation": 0.7853981633974483,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：八邊形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "八邊形",
    "isPossible": false,
    "rejectionReason": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "explanation": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "learningObjective": "正方體不可能有八邊形截面",
    "visualStyle": {
      "palette": 8,
      "material": "jelly",
      "theme": "意式美食派對"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M05-Q01",
    "setId": 5,
    "level": 1,
    "foodId": "food-5-1",
    "foodName": "牛油麵包",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 1.88,
      "topRatio": 0.34,
      "triangleVariant": 1,
      "rotation": 0.3490658503988659,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察牛油麵包的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認直立圓柱的水平截面",
    "visualStyle": {
      "palette": 4,
      "material": "glossy",
      "theme": "歐陸烘焙工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M05-Q02",
    "setId": 5,
    "level": 1,
    "foodId": "food-5-2",
    "foodName": "肉桂糕",
    "solidType": "pyramid4",
    "dimensions": {
      "radius": 1.205,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.205,
      "height": 2.24,
      "topRatio": 0.34,
      "triangleVariant": 2,
      "rotation": 0.6108652381980153,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察肉桂糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "正方形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是正方形；請以切面正視形狀為準。",
    "learningObjective": "辨認正四角錐與底面平行的截面",
    "visualStyle": {
      "palette": 5,
      "material": "jelly",
      "theme": "歐陸烘焙工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M05-Q03",
    "setId": 5,
    "level": 1,
    "foodId": "food-5-3",
    "foodName": "蘋果撻",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 0.88,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.88,
      "height": 1.7,
      "topRatio": 0.34,
      "triangleVariant": 0,
      "rotation": 0.8726646259971648,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察蘋果撻的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認橫放圓柱與軸垂直的截面",
    "visualStyle": {
      "palette": 6,
      "material": "cake",
      "theme": "歐陸烘焙工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M05-Q04",
    "setId": 5,
    "level": 1,
    "foodId": "food-5-4",
    "foodName": "杏仁曲奇",
    "solidType": "cone",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.06,
      "topRatio": 0.34,
      "triangleVariant": 1,
      "rotation": 0.08726646259971647,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察杏仁曲奇的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是三角形；請以切面正視形狀為準。",
    "learningObjective": "認識通過圓錐軸線的切割",
    "visualStyle": {
      "palette": 7,
      "material": "ice",
      "theme": "歐陸烘焙工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M05-Q05",
    "setId": 5,
    "level": 1,
    "foodId": "food-5-5",
    "foodName": "蜂蜜蛋糕",
    "solidType": "sphere",
    "dimensions": {
      "radius": 1.01,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.42,
      "topRatio": 0.34,
      "triangleVariant": 2,
      "rotation": 0.3490658503988659,
      "offsetRatio": 0.22499999999999998,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察蜂蜜蛋糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V",
      "A"
    ],
    "shownCutPlane": {
      "direction": "A",
      "angle": 0,
      "offset": 0.22724999999999998
    },
    "acceptedCutPlanes": [
      {
        "direction": "A",
        "angle": 0,
        "offset": 0.22724999999999998
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "球體只要平面穿過內部，真正的截面都是圓形；斜看可能像橢圓。",
    "learningObjective": "球體非中心截面仍是圓形",
    "visualStyle": {
      "palette": 8,
      "material": "glossy",
      "theme": "歐陸烘焙工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "A"
  },
  {
    "id": "M05-Q06",
    "setId": 5,
    "level": 2,
    "foodId": "food-5-6",
    "foodName": "栗子卷",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.075,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 1.88,
      "topRatio": 0.34,
      "triangleVariant": 0,
      "rotation": 0.6108652381980153,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為圓形。",
    "learningObjective": "均勻截面：圓柱",
    "visualStyle": {
      "palette": 0,
      "material": "jelly",
      "theme": "歐陸烘焙工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M05-Q07",
    "setId": 5,
    "level": 2,
    "foodId": "food-5-7",
    "foodName": "黑麥糕",
    "solidType": "prism3",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 2.24,
      "topRatio": 0.34,
      "triangleVariant": 1,
      "rotation": 0.8726646259971648,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為三角形。",
    "learningObjective": "均勻截面：橫放三角柱",
    "visualStyle": {
      "palette": 1,
      "material": "cake",
      "theme": "歐陸烘焙工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M05-Q08",
    "setId": 5,
    "level": 2,
    "foodId": "food-5-8",
    "foodName": "焦糖布甸",
    "solidType": "prismTrapezoid",
    "dimensions": {
      "radius": 1.205,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.205,
      "height": 1.7,
      "topRatio": 0.34,
      "triangleVariant": 2,
      "rotation": 0.08726646259971647,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為梯形。",
    "learningObjective": "均勻截面：梯形角柱",
    "visualStyle": {
      "palette": 2,
      "material": "ice",
      "theme": "歐陸烘焙工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M05-Q09",
    "setId": 5,
    "level": 2,
    "foodId": "food-5-9",
    "foodName": "榛果塔",
    "solidType": "prism5",
    "dimensions": {
      "radius": 0.88,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.88,
      "height": 2.06,
      "topRatio": 0.34,
      "triangleVariant": 0,
      "rotation": 0.3490658503988659,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "五邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為五邊形。",
    "learningObjective": "均勻截面：橫放五角柱",
    "visualStyle": {
      "palette": 3,
      "material": "glossy",
      "theme": "歐陸烘焙工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M05-Q10",
    "setId": 5,
    "level": 2,
    "foodId": "food-5-10",
    "foodName": "奶酥糕",
    "solidType": "prism6",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.42,
      "topRatio": 0.34,
      "triangleVariant": 1,
      "rotation": 0.6108652381980153,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "六邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為六邊形。",
    "learningObjective": "均勻截面：六角柱",
    "visualStyle": {
      "palette": 4,
      "material": "jelly",
      "theme": "歐陸烘焙工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M05-Q11",
    "setId": 5,
    "level": 3,
    "foodId": "food-5-11",
    "foodName": "糖霜糖",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.01,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.01,
      "height": 1.88,
      "topRatio": 0.34,
      "triangleVariant": 2,
      "rotation": 0.8726646259971648,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱沿柱長的水平截面",
    "visualStyle": {
      "palette": 5,
      "material": "cake",
      "theme": "歐陸烘焙工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M05-Q12",
    "setId": 5,
    "level": 3,
    "foodId": "food-5-12",
    "foodName": "葡萄球",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.075,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.075,
      "height": 2.24,
      "topRatio": 0.34,
      "triangleVariant": 0,
      "rotation": 0.08726646259971647,
      "offsetRatio": 0,
      "axisAngle": 90
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 90,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 90,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱包含軸線的鉛垂截面",
    "visualStyle": {
      "palette": 6,
      "material": "ice",
      "theme": "歐陸烘焙工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M05-Q13",
    "setId": 5,
    "level": 3,
    "foodId": "food-5-13",
    "foodName": "乳酪蛋糕",
    "solidType": "frustum",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 1.7,
      "topRatio": 0.34,
      "triangleVariant": 1,
      "rotation": 0.3490658503988659,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：梯形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": "梯形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是梯形；請以切面正視形狀為準。",
    "learningObjective": "直圓錐台經軸線切割的截面",
    "visualStyle": {
      "palette": 7,
      "material": "glossy",
      "theme": "歐陸烘焙工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M05-Q14",
    "setId": 5,
    "level": 3,
    "foodId": "food-5-14",
    "foodName": "南瓜麵包",
    "solidType": "pyramid5",
    "dimensions": {
      "radius": 1.205,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.205,
      "height": 2.06,
      "topRatio": 0.34,
      "triangleVariant": 2,
      "rotation": 0.6108652381980153,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：圓形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "圓形",
    "isPossible": false,
    "rejectionReason": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "explanation": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "learningObjective": "多面體不能切出圓形",
    "visualStyle": {
      "palette": 8,
      "material": "jelly",
      "theme": "歐陸烘焙工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M05-Q15",
    "setId": 5,
    "level": 3,
    "foodId": "food-5-15",
    "foodName": "巧克力磚",
    "solidType": "cube",
    "dimensions": {
      "radius": 0.88,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 2.42,
      "topRatio": 0.34,
      "triangleVariant": 0,
      "rotation": 0.8726646259971648,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：八邊形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "八邊形",
    "isPossible": false,
    "rejectionReason": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "explanation": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "learningObjective": "正方體不可能有八邊形截面",
    "visualStyle": {
      "palette": 0,
      "material": "cake",
      "theme": "歐陸烘焙工房"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M06-Q01",
    "setId": 6,
    "level": 1,
    "foodId": "food-6-1",
    "foodName": "奶茶啫喱",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.205,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.205,
      "height": 1.7,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 2,
      "rotation": 0.4363323129985824,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察奶茶啫喱的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認直立圓柱的水平截面",
    "visualStyle": {
      "palette": 5,
      "material": "jelly",
      "theme": "港式茶餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M06-Q02",
    "setId": 6,
    "level": 1,
    "foodId": "food-6-2",
    "foodName": "菠蘿包糕",
    "solidType": "pyramid4",
    "dimensions": {
      "radius": 0.88,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 2.06,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 0,
      "rotation": 0.6981317007977318,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察菠蘿包糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "正方形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是正方形；請以切面正視形狀為準。",
    "learningObjective": "辨認正四角錐與底面平行的截面",
    "visualStyle": {
      "palette": 6,
      "material": "cake",
      "theme": "港式茶餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M06-Q03",
    "setId": 6,
    "level": 1,
    "foodId": "food-6-3",
    "foodName": "蛋撻布甸",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.42,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 1,
      "rotation": 0.9599310885968811,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察蛋撻布甸的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認橫放圓柱與軸垂直的截面",
    "visualStyle": {
      "palette": 7,
      "material": "ice",
      "theme": "港式茶餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M06-Q04",
    "setId": 6,
    "level": 1,
    "foodId": "food-6-4",
    "foodName": "西多士糕",
    "solidType": "cone",
    "dimensions": {
      "radius": 1.01,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 1.88,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 2,
      "rotation": 0.17453292519943295,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察西多士糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是三角形；請以切面正視形狀為準。",
    "learningObjective": "認識通過圓錐軸線的切割",
    "visualStyle": {
      "palette": 8,
      "material": "glossy",
      "theme": "港式茶餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M06-Q05",
    "setId": 6,
    "level": 1,
    "foodId": "food-6-5",
    "foodName": "沙嗲糕",
    "solidType": "sphere",
    "dimensions": {
      "radius": 1.075,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 2.24,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 0,
      "rotation": 0.4363323129985824,
      "offsetRatio": 0.3,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察沙嗲糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V",
      "A"
    ],
    "shownCutPlane": {
      "direction": "A",
      "angle": 0,
      "offset": 0.32249999999999995
    },
    "acceptedCutPlanes": [
      {
        "direction": "A",
        "angle": 0,
        "offset": 0.32249999999999995
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "球體只要平面穿過內部，真正的截面都是圓形；斜看可能像橢圓。",
    "learningObjective": "球體非中心截面仍是圓形",
    "visualStyle": {
      "palette": 0,
      "material": "jelly",
      "theme": "港式茶餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "A"
  },
  {
    "id": "M06-Q06",
    "setId": 6,
    "level": 2,
    "foodId": "food-6-6",
    "foodName": "鴛鴦凍",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 1.7,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 1,
      "rotation": 0.6981317007977318,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為圓形。",
    "learningObjective": "均勻截面：圓柱",
    "visualStyle": {
      "palette": 1,
      "material": "cake",
      "theme": "港式茶餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M06-Q07",
    "setId": 6,
    "level": 2,
    "foodId": "food-6-7",
    "foodName": "紅豆冰糕",
    "solidType": "prism3",
    "dimensions": {
      "radius": 1.205,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.205,
      "height": 2.06,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 2,
      "rotation": 0.9599310885968811,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為三角形。",
    "learningObjective": "均勻截面：橫放三角柱",
    "visualStyle": {
      "palette": 2,
      "material": "ice",
      "theme": "港式茶餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M06-Q08",
    "setId": 6,
    "level": 2,
    "foodId": "food-6-8",
    "foodName": "咖央糕",
    "solidType": "prismTrapezoid",
    "dimensions": {
      "radius": 0.88,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 2.42,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 0,
      "rotation": 0.17453292519943295,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為梯形。",
    "learningObjective": "均勻截面：梯形角柱",
    "visualStyle": {
      "palette": 3,
      "material": "glossy",
      "theme": "港式茶餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M06-Q09",
    "setId": 6,
    "level": 2,
    "foodId": "food-6-9",
    "foodName": "椰汁糕",
    "solidType": "prism5",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 1.88,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 1,
      "rotation": 0.4363323129985824,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "五邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為五邊形。",
    "learningObjective": "均勻截面：橫放五角柱",
    "visualStyle": {
      "palette": 4,
      "material": "jelly",
      "theme": "港式茶餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M06-Q10",
    "setId": 6,
    "level": 2,
    "foodId": "food-6-10",
    "foodName": "牛油方包",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.01,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.24,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 2,
      "rotation": 0.6981317007977318,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "六邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為六邊形。",
    "learningObjective": "均勻截面：六角柱",
    "visualStyle": {
      "palette": 5,
      "material": "cake",
      "theme": "港式茶餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M06-Q11",
    "setId": 6,
    "level": 3,
    "foodId": "food-6-11",
    "foodName": "麥芽糖",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.075,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.075,
      "height": 1.7,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 0,
      "rotation": 0.9599310885968811,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱沿柱長的水平截面",
    "visualStyle": {
      "palette": 6,
      "material": "ice",
      "theme": "港式茶餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M06-Q12",
    "setId": 6,
    "level": 3,
    "foodId": "food-6-12",
    "foodName": "冬瓜球",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 2.06,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 1,
      "rotation": 0.17453292519943295,
      "offsetRatio": 0,
      "axisAngle": 90
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 90,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 90,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱包含軸線的鉛垂截面",
    "visualStyle": {
      "palette": 7,
      "material": "glossy",
      "theme": "港式茶餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M06-Q13",
    "setId": 6,
    "level": 3,
    "foodId": "food-6-13",
    "foodName": "芝麻卷",
    "solidType": "frustum",
    "dimensions": {
      "radius": 1.205,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.205,
      "height": 2.42,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 2,
      "rotation": 0.4363323129985824,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：梯形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": "梯形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是梯形；請以切面正視形狀為準。",
    "learningObjective": "直圓錐台經軸線切割的截面",
    "visualStyle": {
      "palette": 8,
      "material": "jelly",
      "theme": "港式茶餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M06-Q14",
    "setId": 6,
    "level": 3,
    "foodId": "food-6-14",
    "foodName": "馬蹄糕",
    "solidType": "pyramid5",
    "dimensions": {
      "radius": 0.88,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 1.88,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 0,
      "rotation": 0.6981317007977318,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：圓形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "圓形",
    "isPossible": false,
    "rejectionReason": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "explanation": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "learningObjective": "多面體不能切出圓形",
    "visualStyle": {
      "palette": 0,
      "material": "cake",
      "theme": "港式茶餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M06-Q15",
    "setId": 6,
    "level": 3,
    "foodId": "food-6-15",
    "foodName": "鮮奶燉蛋糕",
    "solidType": "cube",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.24,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 1,
      "rotation": 0.9599310885968811,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：八邊形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "八邊形",
    "isPossible": false,
    "rejectionReason": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "explanation": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "learningObjective": "正方體不可能有八邊形截面",
    "visualStyle": {
      "palette": 1,
      "material": "ice",
      "theme": "港式茶餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M07-Q01",
    "setId": 7,
    "level": 1,
    "foodId": "food-7-1",
    "foodName": "冰藍雪糕",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 0.88,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 2.42,
      "topRatio": 0.5,
      "triangleVariant": 0,
      "rotation": 0.5235987755982988,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察冰藍雪糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認直立圓柱的水平截面",
    "visualStyle": {
      "palette": 6,
      "material": "cake",
      "theme": "夏日冰品研究所"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M07-Q02",
    "setId": 7,
    "level": 1,
    "foodId": "food-7-2",
    "foodName": "芒果冰磚",
    "solidType": "pyramid4",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 1.88,
      "topRatio": 0.5,
      "triangleVariant": 1,
      "rotation": 0.7853981633974483,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察芒果冰磚的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "正方形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是正方形；請以切面正視形狀為準。",
    "learningObjective": "辨認正四角錐與底面平行的截面",
    "visualStyle": {
      "palette": 7,
      "material": "ice",
      "theme": "夏日冰品研究所"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M07-Q03",
    "setId": 7,
    "level": 1,
    "foodId": "food-7-3",
    "foodName": "荔枝冰糕",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.01,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.24,
      "topRatio": 0.5,
      "triangleVariant": 2,
      "rotation": 0,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察荔枝冰糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認橫放圓柱與軸垂直的截面",
    "visualStyle": {
      "palette": 8,
      "material": "glossy",
      "theme": "夏日冰品研究所"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M07-Q04",
    "setId": 7,
    "level": 1,
    "foodId": "food-7-4",
    "foodName": "蜜桃冰柱",
    "solidType": "cone",
    "dimensions": {
      "radius": 1.075,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 1.7,
      "topRatio": 0.5,
      "triangleVariant": 0,
      "rotation": 0.2617993877991494,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察蜜桃冰柱的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是三角形；請以切面正視形狀為準。",
    "learningObjective": "認識通過圓錐軸線的切割",
    "visualStyle": {
      "palette": 0,
      "material": "jelly",
      "theme": "夏日冰品研究所"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M07-Q05",
    "setId": 7,
    "level": 1,
    "foodId": "food-7-5",
    "foodName": "西柚冰塔",
    "solidType": "sphere",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 2.06,
      "topRatio": 0.5,
      "triangleVariant": 1,
      "rotation": 0.5235987755982988,
      "offsetRatio": 0.15,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察西柚冰塔的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V",
      "A"
    ],
    "shownCutPlane": {
      "direction": "A",
      "angle": 0,
      "offset": 0.171
    },
    "acceptedCutPlanes": [
      {
        "direction": "A",
        "angle": 0,
        "offset": 0.171
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "球體只要平面穿過內部，真正的截面都是圓形；斜看可能像橢圓。",
    "learningObjective": "球體非中心截面仍是圓形",
    "visualStyle": {
      "palette": 1,
      "material": "cake",
      "theme": "夏日冰品研究所"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "A"
  },
  {
    "id": "M07-Q06",
    "setId": 7,
    "level": 2,
    "foodId": "food-7-6",
    "foodName": "薄荷冰卷",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.205,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.205,
      "height": 2.42,
      "topRatio": 0.5,
      "triangleVariant": 2,
      "rotation": 0.7853981633974483,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為圓形。",
    "learningObjective": "均勻截面：圓柱",
    "visualStyle": {
      "palette": 2,
      "material": "ice",
      "theme": "夏日冰品研究所"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M07-Q07",
    "setId": 7,
    "level": 2,
    "foodId": "food-7-7",
    "foodName": "奇異果冰",
    "solidType": "prism3",
    "dimensions": {
      "radius": 0.88,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.88,
      "height": 1.88,
      "topRatio": 0.5,
      "triangleVariant": 0,
      "rotation": 0,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為三角形。",
    "learningObjective": "均勻截面：橫放三角柱",
    "visualStyle": {
      "palette": 3,
      "material": "glossy",
      "theme": "夏日冰品研究所"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M07-Q08",
    "setId": 7,
    "level": 2,
    "foodId": "food-7-8",
    "foodName": "海鹽冰糕",
    "solidType": "prismTrapezoid",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.24,
      "topRatio": 0.5,
      "triangleVariant": 1,
      "rotation": 0.2617993877991494,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為梯形。",
    "learningObjective": "均勻截面：梯形角柱",
    "visualStyle": {
      "palette": 4,
      "material": "jelly",
      "theme": "夏日冰品研究所"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M07-Q09",
    "setId": 7,
    "level": 2,
    "foodId": "food-7-9",
    "foodName": "楊枝甘露凍",
    "solidType": "prism5",
    "dimensions": {
      "radius": 1.01,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.01,
      "height": 1.7,
      "topRatio": 0.5,
      "triangleVariant": 2,
      "rotation": 0.5235987755982988,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "五邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為五邊形。",
    "learningObjective": "均勻截面：橫放五角柱",
    "visualStyle": {
      "palette": 5,
      "material": "cake",
      "theme": "夏日冰品研究所"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M07-Q10",
    "setId": 7,
    "level": 2,
    "foodId": "food-7-10",
    "foodName": "葡萄雪條",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.075,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 2.06,
      "topRatio": 0.5,
      "triangleVariant": 0,
      "rotation": 0.7853981633974483,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "六邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為六邊形。",
    "learningObjective": "均勻截面：六角柱",
    "visualStyle": {
      "palette": 6,
      "material": "ice",
      "theme": "夏日冰品研究所"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M07-Q11",
    "setId": 7,
    "level": 3,
    "foodId": "food-7-11",
    "foodName": "雪花糖",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 2.42,
      "topRatio": 0.5,
      "triangleVariant": 1,
      "rotation": 0,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱沿柱長的水平截面",
    "visualStyle": {
      "palette": 7,
      "material": "glossy",
      "theme": "夏日冰品研究所"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M07-Q12",
    "setId": 7,
    "level": 3,
    "foodId": "food-7-12",
    "foodName": "哈密瓜冰球",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.205,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.205,
      "height": 1.88,
      "topRatio": 0.5,
      "triangleVariant": 2,
      "rotation": 0.2617993877991494,
      "offsetRatio": 0,
      "axisAngle": 90
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 90,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 90,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱包含軸線的鉛垂截面",
    "visualStyle": {
      "palette": 8,
      "material": "jelly",
      "theme": "夏日冰品研究所"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M07-Q13",
    "setId": 7,
    "level": 3,
    "foodId": "food-7-13",
    "foodName": "菠蘿冰糕",
    "solidType": "frustum",
    "dimensions": {
      "radius": 0.88,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 2.24,
      "topRatio": 0.5,
      "triangleVariant": 0,
      "rotation": 0.5235987755982988,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：梯形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": "梯形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是梯形；請以切面正視形狀為準。",
    "learningObjective": "直圓錐台經軸線切割的截面",
    "visualStyle": {
      "palette": 0,
      "material": "cake",
      "theme": "夏日冰品研究所"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M07-Q14",
    "setId": 7,
    "level": 3,
    "foodId": "food-7-14",
    "foodName": "椰奶雪糕",
    "solidType": "pyramid5",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 1.7,
      "topRatio": 0.5,
      "triangleVariant": 1,
      "rotation": 0.7853981633974483,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：圓形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "圓形",
    "isPossible": false,
    "rejectionReason": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "explanation": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "learningObjective": "多面體不能切出圓形",
    "visualStyle": {
      "palette": 1,
      "material": "ice",
      "theme": "夏日冰品研究所"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M07-Q15",
    "setId": 7,
    "level": 3,
    "foodId": "food-7-15",
    "foodName": "莓果雪磚",
    "solidType": "cube",
    "dimensions": {
      "radius": 1.01,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.06,
      "topRatio": 0.5,
      "triangleVariant": 2,
      "rotation": 0,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：八邊形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "八邊形",
    "isPossible": false,
    "rejectionReason": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "explanation": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "learningObjective": "正方體不可能有八邊形截面",
    "visualStyle": {
      "palette": 2,
      "material": "glossy",
      "theme": "夏日冰品研究所"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M08-Q01",
    "setId": 8,
    "level": 1,
    "foodId": "food-8-1",
    "foodName": "蝦餃啫喱",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.24,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 1,
      "rotation": 0.6108652381980153,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察蝦餃啫喱的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認直立圓柱的水平截面",
    "visualStyle": {
      "palette": 7,
      "material": "ice",
      "theme": "中式點心茶樓"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M08-Q02",
    "setId": 8,
    "level": 1,
    "foodId": "food-8-2",
    "foodName": "燒賣糕",
    "solidType": "pyramid4",
    "dimensions": {
      "radius": 1.01,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 1.7,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 2,
      "rotation": 0.8726646259971648,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察燒賣糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "正方形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是正方形；請以切面正視形狀為準。",
    "learningObjective": "辨認正四角錐與底面平行的截面",
    "visualStyle": {
      "palette": 8,
      "material": "glossy",
      "theme": "中式點心茶樓"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M08-Q03",
    "setId": 8,
    "level": 1,
    "foodId": "food-8-3",
    "foodName": "糯米卷",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.075,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.075,
      "height": 2.06,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 0,
      "rotation": 0.08726646259971647,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察糯米卷的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認橫放圓柱與軸垂直的截面",
    "visualStyle": {
      "palette": 0,
      "material": "jelly",
      "theme": "中式點心茶樓"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M08-Q04",
    "setId": 8,
    "level": 1,
    "foodId": "food-8-4",
    "foodName": "桂花糕",
    "solidType": "cone",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 2.42,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 1,
      "rotation": 0.3490658503988659,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察桂花糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是三角形；請以切面正視形狀為準。",
    "learningObjective": "認識通過圓錐軸線的切割",
    "visualStyle": {
      "palette": 1,
      "material": "cake",
      "theme": "中式點心茶樓"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M08-Q05",
    "setId": 8,
    "level": 1,
    "foodId": "food-8-5",
    "foodName": "南瓜包糕",
    "solidType": "sphere",
    "dimensions": {
      "radius": 1.205,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.205,
      "height": 1.88,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 2,
      "rotation": 0.6108652381980153,
      "offsetRatio": 0.22499999999999998,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察南瓜包糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V",
      "A"
    ],
    "shownCutPlane": {
      "direction": "A",
      "angle": 0,
      "offset": 0.271125
    },
    "acceptedCutPlanes": [
      {
        "direction": "A",
        "angle": 0,
        "offset": 0.271125
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "球體只要平面穿過內部，真正的截面都是圓形；斜看可能像橢圓。",
    "learningObjective": "球體非中心截面仍是圓形",
    "visualStyle": {
      "palette": 2,
      "material": "ice",
      "theme": "中式點心茶樓"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "A"
  },
  {
    "id": "M08-Q06",
    "setId": 8,
    "level": 2,
    "foodId": "food-8-6",
    "foodName": "蓮蓉卷",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 0.88,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 2.24,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 0,
      "rotation": 0.8726646259971648,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為圓形。",
    "learningObjective": "均勻截面：圓柱",
    "visualStyle": {
      "palette": 3,
      "material": "glossy",
      "theme": "中式點心茶樓"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M08-Q07",
    "setId": 8,
    "level": 2,
    "foodId": "food-8-7",
    "foodName": "馬拉糕",
    "solidType": "prism3",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 1.7,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 1,
      "rotation": 0.08726646259971647,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為三角形。",
    "learningObjective": "均勻截面：橫放三角柱",
    "visualStyle": {
      "palette": 4,
      "material": "jelly",
      "theme": "中式點心茶樓"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M08-Q08",
    "setId": 8,
    "level": 2,
    "foodId": "food-8-8",
    "foodName": "芝麻千層糕",
    "solidType": "prismTrapezoid",
    "dimensions": {
      "radius": 1.01,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.06,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 2,
      "rotation": 0.3490658503988659,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為梯形。",
    "learningObjective": "均勻截面：梯形角柱",
    "visualStyle": {
      "palette": 5,
      "material": "cake",
      "theme": "中式點心茶樓"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M08-Q09",
    "setId": 8,
    "level": 2,
    "foodId": "food-8-9",
    "foodName": "蘿蔔絲糕",
    "solidType": "prism5",
    "dimensions": {
      "radius": 1.075,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.075,
      "height": 2.42,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 0,
      "rotation": 0.6108652381980153,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "五邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為五邊形。",
    "learningObjective": "均勻截面：橫放五角柱",
    "visualStyle": {
      "palette": 6,
      "material": "ice",
      "theme": "中式點心茶樓"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M08-Q10",
    "setId": 8,
    "level": 2,
    "foodId": "food-8-10",
    "foodName": "紅棗糕",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 1.88,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 1,
      "rotation": 0.8726646259971648,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "六邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為六邊形。",
    "learningObjective": "均勻截面：六角柱",
    "visualStyle": {
      "palette": 7,
      "material": "glossy",
      "theme": "中式點心茶樓"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M08-Q11",
    "setId": 8,
    "level": 3,
    "foodId": "food-8-11",
    "foodName": "冰糖糖果",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.205,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.205,
      "height": 2.24,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 2,
      "rotation": 0.08726646259971647,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱沿柱長的水平截面",
    "visualStyle": {
      "palette": 8,
      "material": "jelly",
      "theme": "中式點心茶樓"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M08-Q12",
    "setId": 8,
    "level": 3,
    "foodId": "food-8-12",
    "foodName": "龍眼球",
    "solidType": "prism6",
    "dimensions": {
      "radius": 0.88,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.88,
      "height": 1.7,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 0,
      "rotation": 0.3490658503988659,
      "offsetRatio": 0,
      "axisAngle": 90
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 90,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 90,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱包含軸線的鉛垂截面",
    "visualStyle": {
      "palette": 0,
      "material": "cake",
      "theme": "中式點心茶樓"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M08-Q13",
    "setId": 8,
    "level": 3,
    "foodId": "food-8-13",
    "foodName": "豆沙糕",
    "solidType": "frustum",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.06,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 1,
      "rotation": 0.6108652381980153,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：梯形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": "梯形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是梯形；請以切面正視形狀為準。",
    "learningObjective": "直圓錐台經軸線切割的截面",
    "visualStyle": {
      "palette": 1,
      "material": "ice",
      "theme": "中式點心茶樓"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M08-Q14",
    "setId": 8,
    "level": 3,
    "foodId": "food-8-14",
    "foodName": "綠豆糕",
    "solidType": "pyramid5",
    "dimensions": {
      "radius": 1.01,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.42,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 2,
      "rotation": 0.8726646259971648,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：圓形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "圓形",
    "isPossible": false,
    "rejectionReason": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "explanation": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "learningObjective": "多面體不能切出圓形",
    "visualStyle": {
      "palette": 2,
      "material": "glossy",
      "theme": "中式點心茶樓"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M08-Q15",
    "setId": 8,
    "level": 3,
    "foodId": "food-8-15",
    "foodName": "芋頭糕",
    "solidType": "cube",
    "dimensions": {
      "radius": 1.075,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 1.88,
      "topRatio": 0.5800000000000001,
      "triangleVariant": 0,
      "rotation": 0.08726646259971647,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：八邊形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "八邊形",
    "isPossible": false,
    "rejectionReason": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "explanation": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "learningObjective": "正方體不可能有八邊形截面",
    "visualStyle": {
      "palette": 3,
      "material": "jelly",
      "theme": "中式點心茶樓"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M09-Q01",
    "setId": 9,
    "level": 1,
    "foodId": "food-9-1",
    "foodName": "魚丸凍",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.01,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.06,
      "topRatio": 0.34,
      "triangleVariant": 2,
      "rotation": 0.6981317007977318,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察魚丸凍的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認直立圓柱的水平截面",
    "visualStyle": {
      "palette": 8,
      "material": "glossy",
      "theme": "火鍋食材工坊"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M09-Q02",
    "setId": 9,
    "level": 1,
    "foodId": "food-9-2",
    "foodName": "豆腐卷",
    "solidType": "pyramid4",
    "dimensions": {
      "radius": 1.075,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 2.42,
      "topRatio": 0.34,
      "triangleVariant": 0,
      "rotation": 0.9599310885968811,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察豆腐卷的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "正方形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是正方形；請以切面正視形狀為準。",
    "learningObjective": "辨認正四角錐與底面平行的截面",
    "visualStyle": {
      "palette": 0,
      "material": "jelly",
      "theme": "火鍋食材工坊"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M09-Q03",
    "setId": 9,
    "level": 1,
    "foodId": "food-9-3",
    "foodName": "牛肉糕",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 1.88,
      "topRatio": 0.34,
      "triangleVariant": 1,
      "rotation": 0.17453292519943295,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察牛肉糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認橫放圓柱與軸垂直的截面",
    "visualStyle": {
      "palette": 1,
      "material": "cake",
      "theme": "火鍋食材工坊"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M09-Q04",
    "setId": 9,
    "level": 1,
    "foodId": "food-9-4",
    "foodName": "蘿蔔糕卷",
    "solidType": "cone",
    "dimensions": {
      "radius": 1.205,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.205,
      "height": 2.24,
      "topRatio": 0.34,
      "triangleVariant": 2,
      "rotation": 0.4363323129985824,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察蘿蔔糕卷的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是三角形；請以切面正視形狀為準。",
    "learningObjective": "認識通過圓錐軸線的切割",
    "visualStyle": {
      "palette": 2,
      "material": "ice",
      "theme": "火鍋食材工坊"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M09-Q05",
    "setId": 9,
    "level": 1,
    "foodId": "food-9-5",
    "foodName": "鮮菇凍",
    "solidType": "sphere",
    "dimensions": {
      "radius": 0.88,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 1.7,
      "topRatio": 0.34,
      "triangleVariant": 0,
      "rotation": 0.6981317007977318,
      "offsetRatio": 0.3,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察鮮菇凍的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V",
      "A"
    ],
    "shownCutPlane": {
      "direction": "A",
      "angle": 0,
      "offset": 0.264
    },
    "acceptedCutPlanes": [
      {
        "direction": "A",
        "angle": 0,
        "offset": 0.264
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "球體只要平面穿過內部，真正的截面都是圓形；斜看可能像橢圓。",
    "learningObjective": "球體非中心截面仍是圓形",
    "visualStyle": {
      "palette": 3,
      "material": "glossy",
      "theme": "火鍋食材工坊"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "A"
  },
  {
    "id": "M09-Q06",
    "setId": 9,
    "level": 2,
    "foodId": "food-9-6",
    "foodName": "海鮮卷",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.06,
      "topRatio": 0.34,
      "triangleVariant": 1,
      "rotation": 0.9599310885968811,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為圓形。",
    "learningObjective": "均勻截面：圓柱",
    "visualStyle": {
      "palette": 4,
      "material": "jelly",
      "theme": "火鍋食材工坊"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M09-Q07",
    "setId": 9,
    "level": 2,
    "foodId": "food-9-7",
    "foodName": "冬瓜糕",
    "solidType": "prism3",
    "dimensions": {
      "radius": 1.01,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.42,
      "topRatio": 0.34,
      "triangleVariant": 2,
      "rotation": 0.17453292519943295,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為三角形。",
    "learningObjective": "均勻截面：橫放三角柱",
    "visualStyle": {
      "palette": 5,
      "material": "cake",
      "theme": "火鍋食材工坊"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M09-Q08",
    "setId": 9,
    "level": 2,
    "foodId": "food-9-8",
    "foodName": "蟹柳糕",
    "solidType": "prismTrapezoid",
    "dimensions": {
      "radius": 1.075,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 1.88,
      "topRatio": 0.34,
      "triangleVariant": 0,
      "rotation": 0.4363323129985824,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為梯形。",
    "learningObjective": "均勻截面：梯形角柱",
    "visualStyle": {
      "palette": 6,
      "material": "ice",
      "theme": "火鍋食材工坊"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M09-Q09",
    "setId": 9,
    "level": 2,
    "foodId": "food-9-9",
    "foodName": "竹笙糕",
    "solidType": "prism5",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 2.24,
      "topRatio": 0.34,
      "triangleVariant": 1,
      "rotation": 0.6981317007977318,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "五邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為五邊形。",
    "learningObjective": "均勻截面：橫放五角柱",
    "visualStyle": {
      "palette": 7,
      "material": "glossy",
      "theme": "火鍋食材工坊"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M09-Q10",
    "setId": 9,
    "level": 2,
    "foodId": "food-9-10",
    "foodName": "芝士丸糕",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.205,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.205,
      "height": 1.7,
      "topRatio": 0.34,
      "triangleVariant": 2,
      "rotation": 0.9599310885968811,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "六邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為六邊形。",
    "learningObjective": "均勻截面：六角柱",
    "visualStyle": {
      "palette": 8,
      "material": "jelly",
      "theme": "火鍋食材工坊"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M09-Q11",
    "setId": 9,
    "level": 3,
    "foodId": "food-9-11",
    "foodName": "紫薯糖",
    "solidType": "prism6",
    "dimensions": {
      "radius": 0.88,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.88,
      "height": 2.06,
      "topRatio": 0.34,
      "triangleVariant": 0,
      "rotation": 0.17453292519943295,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱沿柱長的水平截面",
    "visualStyle": {
      "palette": 0,
      "material": "cake",
      "theme": "火鍋食材工坊"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M09-Q12",
    "setId": 9,
    "level": 3,
    "foodId": "food-9-12",
    "foodName": "魚蛋球",
    "solidType": "prism6",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.42,
      "topRatio": 0.34,
      "triangleVariant": 1,
      "rotation": 0.4363323129985824,
      "offsetRatio": 0,
      "axisAngle": 90
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 90,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 90,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱包含軸線的鉛垂截面",
    "visualStyle": {
      "palette": 1,
      "material": "ice",
      "theme": "火鍋食材工坊"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M09-Q13",
    "setId": 9,
    "level": 3,
    "foodId": "food-9-13",
    "foodName": "花膠糕",
    "solidType": "frustum",
    "dimensions": {
      "radius": 1.01,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 1.88,
      "topRatio": 0.34,
      "triangleVariant": 2,
      "rotation": 0.6981317007977318,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：梯形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": "梯形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是梯形；請以切面正視形狀為準。",
    "learningObjective": "直圓錐台經軸線切割的截面",
    "visualStyle": {
      "palette": 2,
      "material": "glossy",
      "theme": "火鍋食材工坊"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M09-Q14",
    "setId": 9,
    "level": 3,
    "foodId": "food-9-14",
    "foodName": "豆卜糕",
    "solidType": "pyramid5",
    "dimensions": {
      "radius": 1.075,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 2.24,
      "topRatio": 0.34,
      "triangleVariant": 0,
      "rotation": 0.9599310885968811,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：圓形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "圓形",
    "isPossible": false,
    "rejectionReason": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "explanation": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "learningObjective": "多面體不能切出圓形",
    "visualStyle": {
      "palette": 3,
      "material": "jelly",
      "theme": "火鍋食材工坊"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M09-Q15",
    "setId": 9,
    "level": 3,
    "foodId": "food-9-15",
    "foodName": "蓮藕糕",
    "solidType": "cube",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 1.7,
      "topRatio": 0.34,
      "triangleVariant": 1,
      "rotation": 0.17453292519943295,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：八邊形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "八邊形",
    "isPossible": false,
    "rejectionReason": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "explanation": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "learningObjective": "正方體不可能有八邊形截面",
    "visualStyle": {
      "palette": 4,
      "material": "cake",
      "theme": "火鍋食材工坊"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M10-Q01",
    "setId": 10,
    "level": 1,
    "foodId": "food-10-1",
    "foodName": "銀河果凍",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.075,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 1.88,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 0,
      "rotation": 0.7853981633974483,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察銀河果凍的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認直立圓柱的水平截面",
    "visualStyle": {
      "palette": 0,
      "material": "jelly",
      "theme": "太空創意餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M10-Q02",
    "setId": 10,
    "level": 1,
    "foodId": "food-10-2",
    "foodName": "火星慕絲",
    "solidType": "pyramid4",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 2.24,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 1,
      "rotation": 0,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察火星慕絲的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "正方形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是正方形；請以切面正視形狀為準。",
    "learningObjective": "辨認正四角錐與底面平行的截面",
    "visualStyle": {
      "palette": 1,
      "material": "cake",
      "theme": "太空創意餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M10-Q03",
    "setId": 10,
    "level": 1,
    "foodId": "food-10-3",
    "foodName": "星雲脆餅",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.205,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.205,
      "height": 1.7,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 2,
      "rotation": 0.2617993877991494,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察星雲脆餅的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是圓形；請以切面正視形狀為準。",
    "learningObjective": "辨認橫放圓柱與軸垂直的截面",
    "visualStyle": {
      "palette": 2,
      "material": "ice",
      "theme": "太空創意餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M10-Q04",
    "setId": 10,
    "level": 1,
    "foodId": "food-10-4",
    "foodName": "月球糖",
    "solidType": "cone",
    "dimensions": {
      "radius": 0.88,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 2.06,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 0,
      "rotation": 0.5235987755982988,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察月球糖的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是三角形；請以切面正視形狀為準。",
    "learningObjective": "認識通過圓錐軸線的切割",
    "visualStyle": {
      "palette": 3,
      "material": "glossy",
      "theme": "太空創意餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M10-Q05",
    "setId": 10,
    "level": 1,
    "foodId": "food-10-5",
    "foodName": "彗星蛋糕",
    "solidType": "sphere",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 2.42,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 1,
      "rotation": 0.7853981633974483,
      "offsetRatio": 0.15,
      "axisAngle": 0
    },
    "prompt": "沿示意切割方式揮刀，觀察彗星蛋糕的截面。",
    "taskType": "guided-slice",
    "allowedCutDirections": [
      "H",
      "V",
      "A"
    ],
    "shownCutPlane": {
      "direction": "A",
      "angle": 0,
      "offset": 0.14175000000000001
    },
    "acceptedCutPlanes": [
      {
        "direction": "A",
        "angle": 0,
        "offset": 0.14175000000000001
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "球體只要平面穿過內部，真正的截面都是圓形；斜看可能像橢圓。",
    "learningObjective": "球體非中心截面仍是圓形",
    "visualStyle": {
      "palette": 4,
      "material": "jelly",
      "theme": "太空創意餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "A"
  },
  {
    "id": "M10-Q06",
    "setId": 10,
    "level": 2,
    "foodId": "food-10-6",
    "foodName": "宇宙卷",
    "solidType": "cylinder",
    "dimensions": {
      "radius": 1.01,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.01,
      "height": 1.88,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 2,
      "rotation": 0,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "圓形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為圓形。",
    "learningObjective": "均勻截面：圓柱",
    "visualStyle": {
      "palette": 5,
      "material": "cake",
      "theme": "太空創意餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M10-Q07",
    "setId": 10,
    "level": 2,
    "foodId": "food-10-7",
    "foodName": "土星甜糕",
    "solidType": "prism3",
    "dimensions": {
      "radius": 1.075,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.075,
      "height": 2.24,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 0,
      "rotation": 0.2617993877991494,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "三角形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為三角形。",
    "learningObjective": "均勻截面：橫放三角柱",
    "visualStyle": {
      "palette": 6,
      "material": "ice",
      "theme": "太空創意餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M10-Q08",
    "setId": 10,
    "level": 2,
    "foodId": "food-10-8",
    "foodName": "隕石糕",
    "solidType": "prismTrapezoid",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 1.7,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 1,
      "rotation": 0.5235987755982988,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為梯形。",
    "learningObjective": "均勻截面：梯形角柱",
    "visualStyle": {
      "palette": 7,
      "material": "glossy",
      "theme": "太空創意餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M10-Q09",
    "setId": 10,
    "level": 2,
    "foodId": "food-10-9",
    "foodName": "極光布甸",
    "solidType": "prism5",
    "dimensions": {
      "radius": 1.205,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.205,
      "height": 2.06,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 2,
      "rotation": 0.7853981633974483,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "五邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為五邊形。",
    "learningObjective": "均勻截面：橫放五角柱",
    "visualStyle": {
      "palette": 8,
      "material": "jelly",
      "theme": "太空創意餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M10-Q10",
    "setId": 10,
    "level": 2,
    "foodId": "food-10-10",
    "foodName": "星際薄餅",
    "solidType": "prism6",
    "dimensions": {
      "radius": 0.88,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 0.88,
      "height": 2.42,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 0,
      "rotation": 0,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "請切出均勻截面！",
    "taskType": "uniform-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": null,
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "六邊形",
    "targetSection": null,
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "沿柱軸方向不同位置的橫截面，形狀與大小均相同，為六邊形。",
    "learningObjective": "均勻截面：六角柱",
    "visualStyle": {
      "palette": 0,
      "material": "cake",
      "theme": "太空創意餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M10-Q11",
    "setId": 10,
    "level": 3,
    "foodId": "food-10-11",
    "foodName": "量子糖",
    "solidType": "prism6",
    "dimensions": {
      "radius": 0.9450000000000001,
      "height": 1.88,
      "length": 1.88
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 0.9450000000000001,
      "height": 1.88,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 1,
      "rotation": 0.2617993877991494,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱沿柱長的水平截面",
    "visualStyle": {
      "palette": 1,
      "material": "ice",
      "theme": "太空創意餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M10-Q12",
    "setId": 10,
    "level": 3,
    "foodId": "food-10-12",
    "foodName": "小行星球",
    "solidType": "prism6",
    "dimensions": {
      "radius": 1.01,
      "height": 2.24,
      "length": 2.24
    },
    "placement": "horizontal",
    "geometryParameters": {
      "size": 1.01,
      "height": 2.24,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 2,
      "rotation": 0.5235987755982988,
      "offsetRatio": 0,
      "axisAngle": 90
    },
    "prompt": "訂單目標：長方形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 90,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 90,
        "offset": 0
      }
    ],
    "expectedSection": "長方形",
    "targetSection": "長方形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是長方形；請以切面正視形狀為準。",
    "learningObjective": "橫放六角柱包含軸線的鉛垂截面",
    "visualStyle": {
      "palette": 2,
      "material": "glossy",
      "theme": "太空創意餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M10-Q13",
    "setId": 10,
    "level": 3,
    "foodId": "food-10-13",
    "foodName": "太陽奶凍",
    "solidType": "frustum",
    "dimensions": {
      "radius": 1.075,
      "height": 1.7,
      "length": 1.7
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.075,
      "height": 1.7,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 0,
      "rotation": 0.7853981633974483,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：梯形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": "梯形",
    "targetSection": "梯形",
    "isPossible": true,
    "rejectionReason": "",
    "explanation": "指定平面穿過立體內部，真正的截面是梯形；請以切面正視形狀為準。",
    "learningObjective": "直圓錐台經軸線切割的截面",
    "visualStyle": {
      "palette": 3,
      "material": "jelly",
      "theme": "太空創意餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  },
  {
    "id": "M10-Q14",
    "setId": 10,
    "level": 3,
    "foodId": "food-10-14",
    "foodName": "黑洞糕",
    "solidType": "pyramid5",
    "dimensions": {
      "radius": 1.1400000000000001,
      "height": 2.06,
      "length": 2.06
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.1400000000000001,
      "height": 2.06,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 1,
      "rotation": 0,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：圓形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "H",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "H",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "圓形",
    "isPossible": false,
    "rejectionReason": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "explanation": "多面體的平面截面由直線段圍成，不可能是圓形。",
    "learningObjective": "多面體不能切出圓形",
    "visualStyle": {
      "palette": 4,
      "material": "cake",
      "theme": "太空創意餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "H"
  },
  {
    "id": "M10-Q15",
    "setId": 10,
    "level": 3,
    "foodId": "food-10-15",
    "foodName": "星光方糕",
    "solidType": "cube",
    "dimensions": {
      "radius": 1.205,
      "height": 2.42,
      "length": 2.42
    },
    "placement": "upright",
    "geometryParameters": {
      "size": 1.205,
      "height": 2.42,
      "topRatio": 0.42000000000000004,
      "triangleVariant": 2,
      "rotation": 0.2617993877991494,
      "offsetRatio": 0,
      "axisAngle": 0
    },
    "prompt": "訂單目標：八邊形。請按圖示切法出菜，或拒絕不可能訂單。",
    "taskType": "order-slice",
    "allowedCutDirections": [
      "H",
      "V"
    ],
    "shownCutPlane": {
      "direction": "V",
      "angle": 0,
      "offset": 0
    },
    "acceptedCutPlanes": [
      {
        "direction": "V",
        "angle": 0,
        "offset": 0
      }
    ],
    "expectedSection": null,
    "targetSection": "八邊形",
    "isPossible": false,
    "rejectionReason": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "explanation": "正方體只有六個面，任何非退化平面截面最多六條邊，不可能是八邊形。",
    "learningObjective": "正方體不可能有八邊形截面",
    "visualStyle": {
      "palette": 5,
      "material": "ice",
      "theme": "太空創意餐廳"
    },
    "sourceReference": "校本截面教學設計",
    "standardDirection": "V"
  }
];
