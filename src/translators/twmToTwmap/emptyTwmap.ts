export const emptyTwmap = (): unknown => ({
  tileW: 32,
  tileH: 32,
  cols: 1,
  rows: 1,
  setting: {
    baseGround: 'tileset0'
  },
  rsrcs: {
    0: 'tileset0.png',
    1: 'tileset1.png',
    2: 'tileset3.png',
    3: 'tilepropertyset.png',
    4: 'tileset2.png',
    5: 'tileset9.png',
    6: 'tileset8.png',
    7: 'tileset7.png',
    8: 'tileset5.png',
    9: 'tileset6.png'
  },
  layers: [
    {
      type: 0,
      tiles: {
        '0,0': {
          r: '0',
          i: 63
        }
      }
    },
    {
      type: 1,
      tiles: {}
    }
  ],
  tiles: {},
  objects: {
    dsta1: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 143
        },
        '2,0': {
          r: '0',
          i: 145
        },
        '1,0': {
          r: '0',
          i: 144
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'edge;tileset1;1,0'
        },
        '2,0': {
          test: 'edge;tileset1;1,0'
        },
        '1,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,0'
        }
      }
    },
    table01: {
      cols: 4,
      rows: 4,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 7
        },
        '2,1': {
          r: '6',
          i: 23
        },
        '0,3': {
          r: '6',
          i: 37
        },
        '3,0': {
          r: '6',
          i: 9
        },
        '0,1': {
          r: '6',
          i: 22
        },
        '3,3': {
          r: '6',
          i: 39
        },
        '3,2': {
          r: '6',
          i: 24
        },
        '2,0': {
          r: '6',
          i: 8
        },
        '2,2': {
          r: '6',
          i: 23
        },
        '2,3': {
          r: '6',
          i: 38
        },
        '1,1': {
          r: '6',
          i: 23
        },
        '1,2': {
          r: '6',
          i: 23
        },
        '0,2': {
          r: '6',
          i: 22
        },
        '1,0': {
          r: '6',
          i: 8
        },
        '1,3': {
          r: '6',
          i: 38
        },
        '3,1': {
          r: '6',
          i: 24
        }
      },
      instances: [],
      properties: {
        dlayer: '1'
      },
      tps: {
        '0,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '0,3': {
          layer: '1'
        },
        '3,0': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '3,3': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '2,3': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '3,2': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '1,3': {
          layer: '1'
        },
        '3,1': {
          layer: '1'
        }
      }
    },
    sky034: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 26
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    shadow1_e: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 94
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    table2: {
      cols: 5,
      rows: 3,
      baseLoc: '0,2',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 60
        },
        '0,0': {
          r: '6',
          i: 45
        },
        '0,2': {
          r: '6',
          i: 75
        },
        '3,2': {
          r: '6',
          i: 78
        },
        '1,2': {
          r: '6',
          i: 76
        },
        '2,2': {
          r: '6',
          i: 77
        },
        '4,2': {
          r: '6',
          i: 79
        }
      },
      instances: [],
      properties: {},
      tps: {
        '2,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '4,2': {
          layer: '1'
        },
        '3,2': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        }
      }
    },
    shadow3_n: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 368
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    dste2: {
      cols: 2,
      rows: 4,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 274
        },
        '1,1': {
          r: '0',
          i: 63
        },
        '1,2': {
          r: '0',
          i: 63
        },
        '0,1': {
          r: '0',
          i: 63
        },
        '0,2': {
          r: '0',
          i: 63
        },
        '0,3': {
          r: '0',
          i: 276
        },
        '1,0': {
          r: '0',
          i: 275
        },
        '1,3': {
          r: '0',
          i: 277
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'flat'
        },
        '0,3': {
          test: 'flat'
        },
        '1,1': {
          test: 'edge;tileset7;0,1'
        },
        '1,2': {
          test: 'edge;tileset7;0,1'
        },
        '0,1': {
          layer: '0.5',
          test: 'flat'
        },
        '0,2': {
          layer: '0.5',
          test: 'flat'
        },
        '1,0': {
          test: 'edge;tileset7;0,1'
        },
        '1,3': {
          test: 'edge;tileset7;0,1'
        }
      }
    },
    dste1: {
      cols: 4,
      rows: 2,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 78
        },
        '2,1': {
          r: '0',
          i: 63
        },
        '1,1': {
          r: '0',
          i: 63
        },
        '3,0': {
          r: '0',
          i: 209
        },
        '3,1': {
          r: '0',
          i: 224
        },
        '0,1': {
          r: '0',
          i: 93
        },
        '1,0': {
          r: '0',
          i: 63
        },
        '2,0': {
          r: '0',
          i: 63
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'edge;tileset7;1,2'
        },
        '2,1': {
          layer: '0.5',
          test: 'flat'
        },
        '1,1': {
          layer: '0.5',
          test: 'flat'
        },
        '3,0': {
          test: 'edge;tileset7;1,2'
        },
        '3,1': {
          test: 'flat'
        },
        '0,1': {
          test: 'flat'
        },
        '1,0': {
          test: 'edge;tileset7;1,2'
        },
        '2,0': {
          test: 'edge;tileset7;1,2'
        }
      }
    },
    shine3_e: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 379
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    box1: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 98
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          block: '0',
          layer: '1'
        }
      }
    },
    handgun: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 24
        }
      },
      instances: [],
      properties: {
        cat: 'invisible'
      },
      tps: {}
    },
    shadow1_w: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 81
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    shadow2_s: {
      cols: 1,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '4',
          i: 84
        },
        '0,0': {
          r: '4',
          i: 69
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    sky006: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 250
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    table03: {
      cols: 6,
      rows: 6,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 7
        },
        '3,3': {
          r: '6',
          i: 23
        },
        '3,2': {
          r: '6',
          i: 23
        },
        '2,2': {
          r: '6',
          i: 23
        },
        '4,2': {
          r: '6',
          i: 23
        },
        '1,0': {
          r: '6',
          i: 8
        },
        '0,4': {
          r: '6',
          i: 22
        },
        '4,4': {
          r: '6',
          i: 23
        },
        '1,5': {
          r: '6',
          i: 38
        },
        '2,5': {
          r: '6',
          i: 38
        },
        '3,5': {
          r: '6',
          i: 38
        },
        '5,3': {
          r: '6',
          i: 24
        },
        '5,0': {
          r: '6',
          i: 9
        },
        '4,3': {
          r: '6',
          i: 23
        },
        '1,1': {
          r: '6',
          i: 23
        },
        '2,4': {
          r: '6',
          i: 23
        },
        '1,3': {
          r: '6',
          i: 23
        },
        '5,4': {
          r: '6',
          i: 24
        },
        '0,2': {
          r: '6',
          i: 22
        },
        '2,1': {
          r: '6',
          i: 23
        },
        '0,3': {
          r: '6',
          i: 22
        },
        '5,5': {
          r: '6',
          i: 39
        },
        '3,0': {
          r: '6',
          i: 8
        },
        '1,4': {
          r: '6',
          i: 23
        },
        '0,1': {
          r: '6',
          i: 22
        },
        '2,0': {
          r: '6',
          i: 8
        },
        '4,5': {
          r: '6',
          i: 38
        },
        '0,5': {
          r: '6',
          i: 37
        },
        '5,1': {
          r: '6',
          i: 24
        },
        '3,4': {
          r: '6',
          i: 23
        },
        '1,2': {
          r: '6',
          i: 23
        },
        '4,0': {
          r: '6',
          i: 8
        },
        '2,3': {
          r: '6',
          i: 23
        },
        '5,2': {
          r: '6',
          i: 24
        },
        '4,1': {
          r: '6',
          i: 23
        },
        '3,1': {
          r: '6',
          i: 23
        }
      },
      instances: [],
      properties: {
        dlayer: '1'
      },
      tps: {
        '0,0': {
          layer: '1'
        },
        '3,3': {
          layer: '1'
        },
        '3,2': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '4,2': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '0,4': {
          layer: '1'
        },
        '4,4': {
          layer: '1'
        },
        '1,5': {
          layer: '1'
        },
        '2,5': {
          layer: '1'
        },
        '3,5': {
          layer: '1'
        },
        '5,3': {
          layer: '1'
        },
        '5,0': {
          layer: '1'
        },
        '5,1': {
          layer: '1'
        },
        '4,3': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '2,4': {
          layer: '1'
        },
        '1,3': {
          layer: '1'
        },
        '5,4': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '0,3': {
          layer: '1'
        },
        '5,5': {
          layer: '1'
        },
        '3,0': {
          layer: '1'
        },
        '1,4': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '4,5': {
          layer: '1'
        },
        '0,5': {
          layer: '1'
        },
        '2,3': {
          layer: '1'
        },
        '3,4': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '4,0': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '5,2': {
          layer: '1'
        },
        '4,1': {
          layer: '1'
        },
        '3,1': {
          layer: '1'
        }
      }
    },
    bridge3: {
      cols: 9,
      rows: 5,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '1',
          i: 244
        },
        '0,0': {
          r: '1',
          i: 336
        },
        '3,3': {
          r: '1',
          i: 262
        },
        '3,2': {
          r: '1',
          i: 336
        },
        '8,2': {
          r: '1',
          i: 244
        },
        '2,2': {
          r: '4',
          i: 387
        },
        '6,1': {
          r: '4',
          i: 374
        },
        '1,0': {
          r: '4',
          i: 372
        },
        '0,4': {
          r: '1',
          i: 307
        },
        '8,3': {
          r: '1',
          i: 276
        },
        '4,2': {
          r: '4',
          i: 373
        },
        '1,1': {
          r: '1',
          i: 180
        },
        '5,3': {
          r: '1',
          i: 185
        },
        '5,0': {
          r: '1',
          i: 186
        },
        '7,1': {
          r: '1',
          i: 169
        },
        '4,3': {
          r: '1',
          i: 336
        },
        '6,0': {
          r: '1',
          i: 336
        },
        '7,3': {
          r: '1',
          i: 275
        },
        '0,2': {
          r: '1',
          i: 336
        },
        '2,1': {
          r: '1',
          i: 180
        },
        '0,3': {
          r: '1',
          i: 292
        },
        '2,4': {
          r: '1',
          i: 212
        },
        '1,3': {
          r: '1',
          i: 184
        },
        '3,0': {
          r: '1',
          i: 336
        },
        '1,4': {
          r: '1',
          i: 212
        },
        '0,1': {
          r: '1',
          i: 170
        },
        '6,2': {
          r: '4',
          i: 374
        },
        '6,3': {
          r: '1',
          i: 336
        },
        '8,0': {
          r: '1',
          i: 261
        },
        '7,2': {
          r: '1',
          i: 169
        },
        '5,1': {
          r: '1',
          i: 180
        },
        '2,0': {
          r: '4',
          i: 372
        },
        '1,2': {
          r: '4',
          i: 387
        },
        '4,0': {
          r: '1',
          i: 336
        },
        '2,3': {
          r: '1',
          i: 184
        },
        '7,0': {
          r: '1',
          i: 260
        },
        '5,2': {
          r: '1',
          i: 180
        },
        '4,1': {
          r: '4',
          i: 373
        },
        '3,4': {
          r: '1',
          i: 277
        },
        '3,1': {
          r: '1',
          i: 171
        }
      },
      instances: [],
      properties: {
        size: '2',
        cat: 'bridge'
      },
      tps: {
        '0,0': {
          s: '1',
          layer: '3'
        },
        '2,1': {
          layer: '1',
          block: '0'
        },
        '3,2': {
          s: '1',
          layer: '3'
        },
        '6,0': {
          s: '1',
          layer: '3'
        },
        '3,0': {
          s: '1',
          layer: '3'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '0,2': {
          s: '1',
          layer: '3'
        },
        '5,0': {
          block: '0',
          layer: '0.5'
        },
        '6,3': {
          s: '1',
          layer: '3'
        },
        '5,1': {
          layer: '1',
          block: '0'
        },
        '1,1': {
          layer: '1',
          block: '0'
        },
        '5,3': {
          block: '0',
          layer: '0.5'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '4,0': {
          s: '1',
          layer: '3'
        },
        '4,3': {
          s: '1',
          layer: '3'
        },
        '5,2': {
          layer: '1',
          block: '0'
        }
      }
    },
    sky014: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 16
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    fireplace3: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 213
        },
        '2,0': {
          r: '6',
          i: 215
        },
        '1,0': {
          r: '6',
          i: 214
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '1,0': {
          layer: '3'
        }
      }
    },
    pillar7: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '7',
          i: 225
        },
        '0,0': {
          r: '7',
          i: 166
        },
        '1,0': {
          r: '7',
          i: 168
        },
        '1,1': {
          r: '7',
          i: 229
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        },
        '1,1': {
          s: '1',
          layer: '9'
        }
      }
    },
    house3: {
      cols: 4,
      rows: 4,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 195
        },
        '2,1': {
          r: '4',
          i: 212
        },
        '0,3': {
          r: '4',
          i: 255
        },
        '3,0': {
          r: '4',
          i: 198
        },
        '0,1': {
          r: '4',
          i: 210
        },
        '3,3': {
          r: '4',
          i: 258
        },
        '3,2': {
          r: '4',
          i: 243
        },
        '2,0': {
          r: '4',
          i: 197
        },
        '2,2': {
          r: '4',
          i: 242
        },
        '2,3': {
          r: '4',
          i: 257
        },
        '1,1': {
          r: '4',
          i: 211
        },
        '1,2': {
          r: '4',
          i: 241
        },
        '0,2': {
          r: '4',
          i: 240
        },
        '1,0': {
          r: '4',
          i: 196
        },
        '1,3': {
          r: '4',
          i: 256
        },
        '3,1': {
          r: '4',
          i: 213
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        }
      }
    },
    bed7: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 189
        },
        '0,0': {
          r: '6',
          i: 174
        },
        '2,1': {
          r: '6',
          i: 191
        },
        '1,1': {
          r: '6',
          i: 190
        },
        '1,2': {
          r: '6',
          i: 205
        },
        '2,2': {
          r: '6',
          i: 206
        },
        '0,2': {
          r: '6',
          i: 204
        },
        '1,0': {
          r: '6',
          i: 175
        },
        '2,0': {
          r: '6',
          i: 176
        }
      },
      instances: [],
      properties: {},
      tps: {
        '2,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        }
      }
    },
    dstbi0a: {
      cols: 4,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 146
        },
        '1,0': {
          r: '8',
          i: 147
        },
        '2,0': {
          r: '8',
          i: 147
        },
        '3,0': {
          r: '8',
          i: 148
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetD;1,2'
        },
        '1,0': {
          block: '0',
          test: 'edge;tilesetD;1,2',
          layer: '0'
        },
        '2,0': {
          block: '0',
          layer: '0',
          test: 'edge;tilesetD;1,2'
        },
        '3,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetD;1,2'
        }
      }
    },
    pillar0: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '1',
          i: 145
        },
        '0,0': {
          r: '1',
          i: 86
        },
        '1,0': {
          r: '1',
          i: 88
        },
        '1,1': {
          r: '1',
          i: 149
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        },
        '1,1': {
          s: '1',
          layer: '9'
        }
      }
    },
    decobj0: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 153
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        }
      }
    },
    sky018: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 180
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    dstb0: {
      cols: 4,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 146
        },
        '1,0': {
          r: '0',
          i: 147
        },
        '2,0': {
          r: '0',
          i: 147
        },
        '3,0': {
          r: '0',
          i: 148
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'edge;tileset1;1,2'
        },
        '1,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,2'
        },
        '2,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,2'
        },
        '3,0': {
          test: 'edge;tileset1;1,2'
        }
      }
    },
    stair3: {
      cols: 1,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '0',
          i: 89
        },
        '0,0': {
          r: '0',
          i: 74
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          layer: '0.5',
          test: 'edge;tileset0;2,1'
        },
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset0;2,1'
        }
      }
    },
    pillar5: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '7',
          i: 145
        },
        '0,0': {
          r: '7',
          i: 86
        },
        '1,0': {
          r: '7',
          i: 88
        },
        '1,1': {
          r: '7',
          i: 149
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        },
        '1,1': {
          s: '1',
          layer: '9'
        }
      }
    },
    shadow2_n: {
      cols: 1,
      rows: 2,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '4',
          i: 83
        },
        '0,0': {
          r: '4',
          i: 68
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    dste0: {
      cols: 4,
      rows: 2,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 271
        },
        '2,1': {
          r: '0',
          i: 63
        },
        '1,1': {
          r: '0',
          i: 63
        },
        '3,0': {
          r: '0',
          i: 272
        },
        '3,1': {
          r: '0',
          i: 273
        },
        '0,1': {
          r: '0',
          i: 270
        },
        '1,0': {
          r: '0',
          i: 63
        },
        '2,0': {
          r: '0',
          i: 63
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'flat'
        },
        '2,1': {
          test: 'edge;tileset7;1,0'
        },
        '1,1': {
          test: 'edge;tileset7;1,0'
        },
        '3,0': {
          test: 'flat'
        },
        '3,1': {
          test: 'edge;tileset7;1,0'
        },
        '0,1': {
          test: 'edge;tileset7;1,0'
        },
        '1,0': {
          layer: '0.5',
          test: 'flat'
        },
        '2,0': {
          layer: '0.5',
          test: 'flat'
        }
      }
    },
    dstd2: {
      cols: 2,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '0',
          i: 63
        },
        '0,0': {
          r: '0',
          i: 274
        },
        '0,2': {
          r: '0',
          i: 276
        },
        '1,0': {
          r: '0',
          i: 275
        },
        '1,1': {
          r: '0',
          i: 63
        },
        '1,2': {
          r: '0',
          i: 277
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          layer: '0.5',
          test: 'flat'
        },
        '0,0': {
          test: 'flat'
        },
        '0,2': {
          test: 'flat'
        },
        '1,0': {
          test: 'edge;tileset7;0,1'
        },
        '1,1': {
          test: 'edge;tileset7;0,1'
        },
        '1,2': {
          test: 'edge;tileset7;0,1'
        }
      }
    },
    shadows: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '4',
          i: 223
        },
        '0,0': {
          r: '4',
          i: 360
        },
        '3,2': {
          r: '4',
          i: 179
        },
        '2,2': {
          r: '4',
          i: 376
        },
        '6,1': {
          r: '4',
          i: 253
        },
        '1,0': {
          r: '4',
          i: 368
        },
        '5,0': {
          r: '4',
          i: 237
        },
        '4,2': {
          r: '4',
          i: 164
        },
        '1,1': {
          r: '1',
          i: 299
        },
        '5,3': {
          r: '4',
          i: 407
        },
        '7,1': {
          r: '4',
          i: 222
        },
        '6,0': {
          r: '4',
          i: 238
        },
        '2,1': {
          r: '4',
          i: 365
        },
        '3,0': {
          r: '4',
          i: 390
        },
        '0,1': {
          r: '4',
          i: 367
        },
        '2,0': {
          r: '4',
          i: 361
        },
        '6,3': {
          r: '4',
          i: 408
        },
        '8,0': {
          r: '4',
          i: 208
        },
        '5,1': {
          r: '4',
          i: 252
        },
        '6,2': {
          r: '4',
          i: 393
        },
        '1,2': {
          r: '4',
          i: 366
        },
        '4,0': {
          r: '4',
          i: 391
        },
        '0,2': {
          r: '4',
          i: 375
        },
        '7,0': {
          r: '4',
          i: 207
        },
        '5,2': {
          r: '4',
          i: 392
        },
        '4,1': {
          r: '4',
          i: 406
        },
        '3,1': {
          r: '4',
          i: 405
        }
      },
      instances: [],
      properties: {
        cat: 'system'
      },
      tps: {}
    },
    sky050: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 175
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    sky037: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 108
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    dstai0a: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 146
        },
        '2,0': {
          r: '8',
          i: 148
        },
        '1,0': {
          r: '8',
          i: 147
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'edge;tilesetD;1,2',
          block: '1'
        },
        '2,0': {
          test: 'edge;tilesetD;1,2',
          block: '1'
        },
        '1,0': {
          test: 'edge;tilesetD;1,2',
          layer: '0',
          block: '0'
        }
      }
    },
    dstbi1: {
      cols: 4,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 11
        },
        '1,0': {
          r: '8',
          i: 12
        },
        '2,0': {
          r: '8',
          i: 12
        },
        '3,0': {
          r: '8',
          i: 13
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetC;1,0'
        },
        '1,0': {
          block: '0',
          layer: '0',
          test: 'edge;tilesetC;1,0'
        },
        '2,0': {
          layer: '0',
          test: 'edge;tilesetC;1,0',
          block: '0'
        },
        '3,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetC;1,0'
        }
      }
    },
    dsta0: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 146
        },
        '2,0': {
          r: '0',
          i: 148
        },
        '1,0': {
          r: '0',
          i: 147
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'edge;tileset1;1,2'
        },
        '2,0': {
          test: 'edge;tileset1;1,2'
        },
        '1,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,2'
        }
      }
    },
    box0: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '0',
          i: 83
        },
        '0,0': {
          r: '0',
          i: 68
        },
        '1,0': {
          r: '0',
          i: 69
        },
        '1,1': {
          r: '0',
          i: 84
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1.5'
        },
        '0,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1.5'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1.5'
        },
        '1,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1.5'
        }
      }
    },
    shadow3_e: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 365
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    boat0: {
      cols: 5,
      rows: 3,
      baseLoc: '2,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 259
        },
        '2,1': {
          r: '4',
          i: 276
        },
        '3,2': {
          r: '4',
          i: 292
        },
        '3,0': {
          r: '4',
          i: 262
        },
        '0,1': {
          r: '4',
          i: 274
        },
        '4,2': {
          r: '4',
          i: 293
        },
        '1,0': {
          r: '4',
          i: 260
        },
        '2,0': {
          r: '4',
          i: 261
        },
        '2,2': {
          r: '4',
          i: 291
        },
        '1,1': {
          r: '4',
          i: 275
        },
        '1,2': {
          r: '4',
          i: 290
        },
        '4,0': {
          r: '4',
          i: 263
        },
        '0,2': {
          r: '4',
          i: 289
        },
        '4,1': {
          r: '4',
          i: 278
        },
        '3,1': {
          r: '4',
          i: 277
        }
      },
      instances: [],
      properties: {},
      tps: {
        '2,2': {
          dlayer: '0.5',
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '1,1': {
          block: '0'
        },
        '3,2': {
          block: '1',
          layer: '1'
        },
        '3,0': {
          block: '1',
          layer: '1'
        },
        '1,2': {
          block: '1',
          layer: '1'
        },
        '0,1': {
          block: '1',
          layer: '1'
        },
        '1,0': {
          block: '1',
          layer: '1'
        },
        '4,1': {
          block: '1',
          layer: '1'
        },
        '2,0': {
          dlayer: '0.5',
          block: '0'
        },
        '3,1': {
          block: '0'
        }
      }
    },
    sky028: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '2',
          i: 16
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    lib_moveable_2: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '4',
          i: 317
        },
        '0,0': {
          r: '4',
          i: 302
        },
        '1,0': {
          r: '4',
          i: 303
        },
        '1,1': {
          r: '4',
          i: 318
        }
      },
      instances: [],
      properties: {
        dlayer: '1.5',
        cat: 'device',
        device: 'block'
      },
      tps: {}
    },
    sky036: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 211
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    table1: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 64
        },
        '0,0': {
          r: '6',
          i: 49
        },
        '1,0': {
          r: '6',
          i: 50
        },
        '1,1': {
          r: '6',
          i: 65
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        }
      }
    },
    weapon4: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 18
        }
      },
      instances: [],
      properties: {
        tip: 'rifle',
        cat: 'weapon'
      },
      tps: {
        '0,0': {
          stuff: '3'
        }
      }
    },
    dstb2: {
      cols: 1,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '0',
          i: 164
        },
        '0,0': {
          r: '0',
          i: 149
        },
        '0,2': {
          r: '0',
          i: 164
        },
        '0,3': {
          r: '0',
          i: 179
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          layer: '0.5',
          test: 'edge;tileset1;2,1'
        },
        '0,0': {
          test: 'edge;tileset1;2,1'
        },
        '0,2': {
          layer: '0.5',
          test: 'edge;tileset1;2,1'
        },
        '0,3': {
          test: 'edge;tileset1;2,1'
        }
      }
    },
    dstb1: {
      cols: 4,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 143
        },
        '1,0': {
          r: '0',
          i: 144
        },
        '2,0': {
          r: '0',
          i: 144
        },
        '3,0': {
          r: '0',
          i: 145
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'edge;tileset1;1,0'
        },
        '1,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,0'
        },
        '2,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,0'
        },
        '3,0': {
          test: 'edge;tileset1;1,0'
        }
      }
    },
    pillar6: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '7',
          i: 208
        },
        '0,0': {
          r: '7',
          i: 176
        },
        '1,0': {
          r: '7',
          i: 178
        },
        '1,1': {
          r: '7',
          i: 239
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        },
        '1,1': {
          s: '1',
          layer: '9'
        }
      }
    },
    weapon2: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 17
        }
      },
      instances: [],
      properties: {
        tip: 'sword',
        cat: 'weapon'
      },
      tps: {
        '0,0': {
          stuff: '2'
        }
      }
    },
    boat1: {
      cols: 3,
      rows: 5,
      baseLoc: '1,2',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 204
        },
        '2,1': {
          r: '4',
          i: 221
        },
        '0,3': {
          r: '4',
          i: 249
        },
        '1,4': {
          r: '4',
          i: 265
        },
        '2,2': {
          r: '4',
          i: 236
        },
        '1,0': {
          r: '4',
          i: 205
        },
        '0,4': {
          r: '4',
          i: 264
        },
        '2,0': {
          r: '4',
          i: 206
        },
        '0,1': {
          r: '4',
          i: 219
        },
        '2,3': {
          r: '4',
          i: 251
        },
        '1,1': {
          r: '4',
          i: 220
        },
        '1,2': {
          r: '4',
          i: 235
        },
        '0,2': {
          r: '4',
          i: 234
        },
        '2,4': {
          r: '4',
          i: 266
        },
        '1,3': {
          r: '4',
          i: 250
        }
      },
      instances: [],
      properties: {},
      tps: {
        '2,2': {
          dlayer: '0.5',
          block: '0'
        },
        '2,3': {
          block: '1',
          layer: '1'
        },
        '2,1': {
          block: '1',
          layer: '1'
        },
        '0,3': {
          block: '1',
          layer: '1'
        },
        '1,1': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '0,1': {
          block: '1',
          layer: '1'
        },
        '0,2': {
          dlayer: '0.5',
          block: '0'
        },
        '1,0': {
          block: '1',
          layer: '1'
        },
        '1,3': {
          block: '0'
        },
        '1,4': {
          block: '1',
          layer: '1'
        }
      }
    },
    sky024: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 89
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    weapon7: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 21
        }
      },
      instances: [],
      properties: {
        tip: 'magazine',
        cat: 'weapon'
      },
      tps: {
        '0,0': {
          stuff: '1'
        }
      }
    },
    weapon0: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 15
        }
      },
      instances: [],
      properties: {
        tip: 'hatchet',
        cat: 'weapon'
      },
      tps: {
        '0,0': {
          stuff: '10'
        }
      }
    },
    tree4: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 92
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        }
      }
    },
    sky016: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 180
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    rock5: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '4',
          i: 287
        },
        '0,0': {
          r: '4',
          i: 272
        },
        '1,0': {
          r: '4',
          i: 273
        },
        '1,1': {
          r: '4',
          i: 288
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          layer: '2'
        },
        '0,0': {
          layer: '2'
        },
        '1,0': {
          layer: '2'
        },
        '1,1': {
          layer: '2'
        }
      }
    },
    dstai3a: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '8',
          i: 115
        },
        '0,0': {
          r: '8',
          i: 100
        },
        '0,2': {
          r: '8',
          i: 130
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          layer: '0',
          test: 'edge;tilesetD;0,1',
          block: '0'
        },
        '0,0': {
          layer: '0',
          test: 'edge;tilesetD;0,1',
          block: '1'
        },
        '0,2': {
          layer: '0',
          test: 'edge;tilesetD;0,1',
          block: '1'
        }
      }
    },
    dstbi2: {
      cols: 1,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '8',
          i: 44
        },
        '0,0': {
          r: '8',
          i: 29
        },
        '0,2': {
          r: '8',
          i: 44
        },
        '0,3': {
          r: '8',
          i: 59
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          block: '0',
          layer: '0',
          test: 'edge;tilesetC;2,1'
        },
        '0,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetC;2,1'
        },
        '0,2': {
          block: '0',
          test: 'edge;tilesetC;2,1',
          layer: '0'
        },
        '0,3': {
          test: 'edge;tilesetC;2,1',
          block: '1',
          layer: '0'
        }
      }
    },
    wallset3: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '1',
          i: 300
        },
        '0,0': {
          r: '1',
          i: 256
        },
        '2,1': {
          r: '1',
          i: 273
        },
        '3,2': {
          r: '1',
          i: 335
        },
        '3,0': {
          r: '1',
          i: 290
        },
        '1,2': {
          r: '1',
          i: 316
        },
        '2,2': {
          r: '1',
          i: 286
        },
        '4,0': {
          r: '1',
          i: 291
        },
        '0,2': {
          r: '1',
          i: 315
        },
        '1,0': {
          r: '1',
          i: 257
        },
        '2,0': {
          r: '1',
          i: 258
        },
        '3,1': {
          r: '1',
          i: 320
        }
      },
      instances: [],
      properties: {
        dlayer: '6',
        cat: 'wallset'
      },
      tps: {
        '2,2': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        },
        '3,2': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '3,1': {
          s: '1'
        }
      }
    },
    sky039: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 71
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    sky015: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 139
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    wallsetA: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '7',
          i: 300
        },
        '0,0': {
          r: '7',
          i: 285
        },
        '2,1': {
          r: '7',
          i: 304
        },
        '3,2': {
          r: '7',
          i: 247
        },
        '3,0': {
          r: '7',
          i: 283
        },
        '1,2': {
          r: '7',
          i: 316
        },
        '2,2': {
          r: '7',
          i: 286
        },
        '4,0': {
          r: '7',
          i: 284
        },
        '0,2': {
          r: '7',
          i: 315
        },
        '1,0': {
          r: '7',
          i: 257
        },
        '2,0': {
          r: '7',
          i: 258
        },
        '3,1': {
          r: '7',
          i: 232
        }
      },
      instances: [],
      properties: {
        dlayer: '6',
        cat: 'wallset'
      },
      tps: {
        '2,2': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        },
        '3,2': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '3,1': {
          s: '1'
        }
      }
    },
    sky025: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 339
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    camp1: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 0
        }
      },
      instances: [],
      properties: {
        tip: 'skydow',
        cat: 'camp'
      },
      tps: {
        '0,0': {
          camp: '1'
        }
      }
    },
    table06: {
      cols: 9,
      rows: 9,
      baseLoc: '4,4',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '6',
          i: 24
        },
        '0,8': {
          r: '6',
          i: 37
        },
        '5,4': {
          r: '6',
          i: 23
        },
        '8,2': {
          r: '6',
          i: 24
        },
        '2,2': {
          r: '6',
          i: 23
        },
        '5,7': {
          r: '6',
          i: 23
        },
        '4,2': {
          r: '6',
          i: 23
        },
        '1,0': {
          r: '6',
          i: 8
        },
        '0,4': {
          r: '6',
          i: 22
        },
        '4,4': {
          r: '6',
          i: 23
        },
        '1,5': {
          r: '6',
          i: 23
        },
        '1,1': {
          r: '6',
          i: 23
        },
        '5,8': {
          r: '6',
          i: 38
        },
        '8,6': {
          r: '6',
          i: 24
        },
        '7,1': {
          r: '6',
          i: 23
        },
        '3,6': {
          r: '6',
          i: 23
        },
        '3,5': {
          r: '6',
          i: 23
        },
        '1,3': {
          r: '6',
          i: 23
        },
        '0,7': {
          r: '6',
          i: 22
        },
        '2,7': {
          r: '6',
          i: 23
        },
        '2,3': {
          r: '6',
          i: 23
        },
        '5,5': {
          r: '6',
          i: 23
        },
        '7,8': {
          r: '6',
          i: 38
        },
        '4,5': {
          r: '6',
          i: 23
        },
        '2,1': {
          r: '6',
          i: 23
        },
        '0,3': {
          r: '6',
          i: 22
        },
        '4,8': {
          r: '6',
          i: 38
        },
        '3,0': {
          r: '6',
          i: 8
        },
        '2,6': {
          r: '6',
          i: 23
        },
        '8,0': {
          r: '6',
          i: 9
        },
        '0,5': {
          r: '6',
          i: 22
        },
        '3,8': {
          r: '6',
          i: 38
        },
        '6,2': {
          r: '6',
          i: 23
        },
        '3,1': {
          r: '6',
          i: 23
        },
        '7,3': {
          r: '6',
          i: 23
        },
        '4,0': {
          r: '6',
          i: 8
        },
        '7,0': {
          r: '6',
          i: 8
        },
        '4,1': {
          r: '6',
          i: 23
        },
        '3,4': {
          r: '6',
          i: 23
        },
        '6,3': {
          r: '6',
          i: 23
        },
        '0,0': {
          r: '6',
          i: 7
        },
        '3,3': {
          r: '6',
          i: 23
        },
        '3,2': {
          r: '6',
          i: 23
        },
        '6,6': {
          r: '6',
          i: 23
        },
        '1,8': {
          r: '6',
          i: 38
        },
        '6,1': {
          r: '6',
          i: 23
        },
        '5,0': {
          r: '6',
          i: 8
        },
        '8,3': {
          r: '6',
          i: 24
        },
        '1,6': {
          r: '6',
          i: 23
        },
        '8,8': {
          r: '6',
          i: 39
        },
        '8,7': {
          r: '6',
          i: 24
        },
        '2,5': {
          r: '6',
          i: 23
        },
        '5,3': {
          r: '6',
          i: 23
        },
        '7,4': {
          r: '6',
          i: 23
        },
        '6,7': {
          r: '6',
          i: 23
        },
        '4,3': {
          r: '6',
          i: 23
        },
        '2,4': {
          r: '6',
          i: 23
        },
        '8,4': {
          r: '6',
          i: 24
        },
        '7,6': {
          r: '6',
          i: 23
        },
        '1,7': {
          r: '6',
          i: 23
        },
        '7,5': {
          r: '6',
          i: 23
        },
        '6,0': {
          r: '6',
          i: 8
        },
        '2,8': {
          r: '6',
          i: 38
        },
        '4,7': {
          r: '6',
          i: 23
        },
        '7,7': {
          r: '6',
          i: 23
        },
        '6,4': {
          r: '6',
          i: 23
        },
        '0,6': {
          r: '6',
          i: 22
        },
        '4,6': {
          r: '6',
          i: 23
        },
        '6,8': {
          r: '6',
          i: 38
        },
        '2,0': {
          r: '6',
          i: 8
        },
        '1,4': {
          r: '6',
          i: 23
        },
        '0,1': {
          r: '6',
          i: 22
        },
        '7,2': {
          r: '6',
          i: 23
        },
        '5,1': {
          r: '6',
          i: 23
        },
        '8,5': {
          r: '6',
          i: 24
        },
        '1,2': {
          r: '6',
          i: 23
        },
        '5,6': {
          r: '6',
          i: 23
        },
        '6,5': {
          r: '6',
          i: 23
        },
        '0,2': {
          r: '6',
          i: 22
        },
        '5,2': {
          r: '6',
          i: 23
        },
        '3,7': {
          r: '6',
          i: 23
        }
      },
      instances: [],
      properties: {
        dlayer: '1'
      },
      tps: {
        '8,1': {
          layer: '1'
        },
        '0,8': {
          layer: '1'
        },
        '5,4': {
          layer: '1'
        },
        '8,2': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '4,2': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '0,4': {
          layer: '1'
        },
        '4,4': {
          layer: '1'
        },
        '1,5': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '5,8': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '8,6': {
          layer: '1'
        },
        '7,1': {
          layer: '1'
        },
        '0,7': {
          layer: '1'
        },
        '3,5': {
          layer: '1'
        },
        '1,3': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '0,3': {
          layer: '1'
        },
        '5,5': {
          layer: '1'
        },
        '3,0': {
          layer: '1'
        },
        '4,5': {
          layer: '1'
        },
        '2,7': {
          layer: '1'
        },
        '4,8': {
          layer: '1'
        },
        '6,2': {
          layer: '1'
        },
        '2,6': {
          layer: '1'
        },
        '8,0': {
          layer: '1'
        },
        '0,5': {
          layer: '1'
        },
        '3,8': {
          layer: '1'
        },
        '3,4': {
          layer: '1'
        },
        '3,1': {
          layer: '1'
        },
        '7,3': {
          layer: '1'
        },
        '4,0': {
          layer: '1'
        },
        '7,0': {
          layer: '1'
        },
        '4,1': {
          layer: '1'
        },
        '6,6': {
          layer: '1'
        },
        '3,6': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '3,3': {
          layer: '1'
        },
        '3,2': {
          layer: '1'
        },
        '7,7': {
          layer: '1'
        },
        '1,6': {
          layer: '1'
        },
        '6,1': {
          layer: '1'
        },
        '7,8': {
          layer: '1'
        },
        '5,0': {
          layer: '1'
        },
        '8,3': {
          layer: '1'
        },
        '1,8': {
          layer: '1'
        },
        '8,8': {
          layer: '1'
        },
        '8,7': {
          layer: '1'
        },
        '2,5': {
          layer: '1'
        },
        '5,3': {
          layer: '1'
        },
        '6,3': {
          layer: '1'
        },
        '6,7': {
          layer: '1'
        },
        '4,3': {
          layer: '1'
        },
        '2,4': {
          layer: '1'
        },
        '8,4': {
          layer: '1'
        },
        '7,6': {
          layer: '1'
        },
        '1,7': {
          layer: '1'
        },
        '7,4': {
          layer: '1'
        },
        '7,5': {
          layer: '1'
        },
        '6,0': {
          layer: '1'
        },
        '2,8': {
          layer: '1'
        },
        '4,7': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '6,4': {
          layer: '1'
        },
        '0,6': {
          layer: '1'
        },
        '4,6': {
          layer: '1'
        },
        '6,8': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '1,4': {
          layer: '1'
        },
        '5,6': {
          layer: '1'
        },
        '7,2': {
          layer: '1'
        },
        '5,1': {
          layer: '1'
        },
        '8,5': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '5,7': {
          layer: '1'
        },
        '6,5': {
          layer: '1'
        },
        '2,3': {
          layer: '1'
        },
        '5,2': {
          layer: '1'
        },
        '3,7': {
          layer: '1'
        }
      }
    },
    weapon9: {
      cols: 3,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '3',
          i: 40
        },
        '0,0': {
          r: '3',
          i: 25
        },
        '2,1': {
          r: '3',
          i: 42
        },
        '1,1': {
          r: '3',
          i: 41
        },
        '1,2': {
          r: '3',
          i: 56
        },
        '2,2': {
          r: '3',
          i: 57
        },
        '0,2': {
          r: '3',
          i: 55
        },
        '1,0': {
          r: '3',
          i: 26
        },
        '2,0': {
          r: '3',
          i: 27
        }
      },
      instances: [],
      properties: {
        tip: 'gatling',
        cat: 'weapon',
        alone: 'true'
      },
      tps: {
        '2,2': {
          test: 'flat'
        },
        '0,0': {
          test: 'flat'
        },
        '2,1': {
          test: 'flat'
        },
        '1,1': {
          stuff: '14',
          test: 'flat'
        },
        '1,2': {
          test: 'flat'
        },
        '0,1': {
          test: 'flat'
        },
        '0,2': {
          test: 'flat'
        },
        '1,0': {
          test: 'flat'
        },
        '2,0': {
          test: 'flat'
        }
      }
    },
    pillar8a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 321
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    tree1: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '4',
          i: 60
        },
        '0,0': {
          r: '4',
          i: 45
        },
        '2,1': {
          r: '4',
          i: 62
        },
        '1,1': {
          r: '4',
          i: 61
        },
        '1,2': {
          r: '4',
          i: 76
        },
        '2,2': {
          r: '4',
          i: 77
        },
        '0,2': {
          r: '4',
          i: 75
        },
        '1,0': {
          r: '4',
          i: 46
        },
        '2,0': {
          r: '4',
          i: 47
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '1,1': {
          layer: '3'
        }
      }
    },
    sea0: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '2',
          i: 45
        },
        '2,1': {
          r: '2',
          i: 62
        },
        '3,0': {
          r: '2',
          i: 50
        },
        '0,1': {
          r: '2',
          i: 60
        },
        '1,0': {
          r: '2',
          i: 46
        },
        '2,0': {
          r: '2',
          i: 47
        },
        '2,2': {
          r: '2',
          i: 77
        },
        '1,1': {
          r: '2',
          i: 61
        },
        '1,2': {
          r: '2',
          i: 76
        },
        '4,0': {
          r: '2',
          i: 52
        },
        '0,2': {
          r: '2',
          i: 75
        },
        '4,1': {
          r: '2',
          i: 82
        },
        '3,1': {
          r: '2',
          i: 80
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '0,0': {
          water: '1'
        },
        '2,1': {
          water: '1'
        },
        '3,0': {
          water: '1'
        },
        '2,2': {
          water: '1'
        },
        '1,0': {
          water: '1'
        },
        '2,0': {
          water: '1'
        },
        '0,1': {
          water: '1'
        },
        '1,1': {
          water: '1'
        },
        '1,2': {
          water: '1'
        },
        '4,0': {
          water: '1'
        },
        '0,2': {
          water: '1'
        },
        '4,1': {
          water: '1'
        },
        '3,1': {
          water: '1'
        }
      }
    },
    tileset5: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '7',
          i: 163
        },
        '0,0': {
          r: '7',
          i: 298
        },
        '3,2': {
          r: '7',
          i: 117
        },
        '8,2': {
          r: '7',
          i: 174
        },
        '9,0': {
          r: '7',
          i: 172
        },
        '2,2': {
          r: '7',
          i: 314
        },
        '6,1': {
          r: '7',
          i: 100
        },
        '1,0': {
          r: '7',
          i: 98
        },
        '5,0': {
          r: '7',
          i: 132
        },
        '8,3': {
          r: '7',
          i: 189
        },
        '4,2': {
          r: '7',
          i: 192
        },
        '1,1': {
          r: '7',
          i: 104
        },
        '5,3': {
          r: '7',
          i: 133
        },
        '7,1': {
          r: '7',
          i: 164
        },
        '6,0': {
          r: '7',
          i: 160
        },
        '7,3': {
          r: '7',
          i: 188
        },
        '2,1': {
          r: '7',
          i: 84
        },
        '3,1': {
          r: '7',
          i: 343
        },
        '9,3': {
          r: '7',
          i: 217
        },
        '3,0': {
          r: '7',
          i: 328
        },
        '0,1': {
          r: '7',
          i: 83
        },
        '9,1': {
          r: '7',
          i: 187
        },
        '9,2': {
          r: '7',
          i: 202
        },
        '6,3': {
          r: '7',
          i: 102
        },
        '8,0': {
          r: '7',
          i: 161
        },
        '7,2': {
          r: '7',
          i: 173
        },
        '5,1': {
          r: '7',
          i: 85
        },
        '2,0': {
          r: '7',
          i: 299
        },
        '1,2': {
          r: '7',
          i: 99
        },
        '4,0': {
          r: '7',
          i: 329
        },
        '0,2': {
          r: '7',
          i: 313
        },
        '7,0': {
          r: '7',
          i: 162
        },
        '5,2': {
          r: '7',
          i: 175
        },
        '4,1': {
          r: '7',
          i: 344
        },
        '6,2': {
          r: '7',
          i: 131
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '0.5'
        },
        '3,2': {
          block: '0'
        },
        '8,2': {
          block: '0'
        },
        '9,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '0.5'
        },
        '9,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          block: '0',
          layer: '0.5'
        },
        '5,0': {
          block: '0'
        },
        '8,3': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0',
          layer: '1'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '7,3': {
          block: '0'
        },
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '9,3': {
          block: '0'
        },
        '3,0': {
          block: '0',
          layer: '1'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '9,1': {
          block: '0'
        },
        '2,0': {
          block: '0',
          layer: '0.5'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '7,2': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          block: '0',
          layer: '0.5'
        },
        '4,0': {
          block: '0',
          layer: '1'
        },
        '0,2': {
          block: '0',
          layer: '0.5'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '1'
        },
        '3,1': {
          block: '0',
          layer: '1'
        }
      }
    },
    bed5: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 186
        },
        '0,0': {
          r: '6',
          i: 171
        },
        '2,1': {
          r: '6',
          i: 188
        },
        '1,1': {
          r: '6',
          i: 187
        },
        '1,2': {
          r: '6',
          i: 202
        },
        '2,2': {
          r: '6',
          i: 203
        },
        '0,2': {
          r: '6',
          i: 201
        },
        '1,0': {
          r: '6',
          i: 172
        },
        '2,0': {
          r: '6',
          i: 173
        }
      },
      instances: [],
      properties: {},
      tps: {
        '2,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        }
      }
    },
    dstc3: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 15
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset1;0,1'
        }
      }
    },
    decobj4: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 219
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '0.5'
        }
      }
    },
    tmAtk: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 3
        }
      },
      instances: [],
      properties: {
        tip: 'atk',
        cat: 'team'
      },
      tps: {
        '0,0': {
          team: 'atk'
        }
      }
    },
    pillar3a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 321
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    igloo1: {
      cols: 6,
      rows: 5,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '9',
          i: 90
        },
        '3,3': {
          r: '9',
          i: 138
        },
        '3,2': {
          r: '9',
          i: 123
        },
        '2,2': {
          r: '9',
          i: 122
        },
        '4,2': {
          r: '9',
          i: 124
        },
        '1,0': {
          r: '9',
          i: 91
        },
        '0,4': {
          r: '9',
          i: 150
        },
        '4,4': {
          r: '9',
          i: 154
        },
        '1,1': {
          r: '9',
          i: 106
        },
        '5,3': {
          r: '9',
          i: 140
        },
        '2,3': {
          r: '9',
          i: 137
        },
        '4,3': {
          r: '9',
          i: 139
        },
        '2,4': {
          r: '9',
          i: 152
        },
        '1,3': {
          r: '9',
          i: 136
        },
        '2,1': {
          r: '9',
          i: 107
        },
        '0,3': {
          r: '9',
          i: 135
        },
        '3,0': {
          r: '9',
          i: 93
        },
        '1,4': {
          r: '9',
          i: 151
        },
        '0,1': {
          r: '9',
          i: 105
        },
        '2,0': {
          r: '9',
          i: 92
        },
        '5,1': {
          r: '9',
          i: 110
        },
        '3,4': {
          r: '9',
          i: 153
        },
        '1,2': {
          r: '9',
          i: 121
        },
        '4,0': {
          r: '9',
          i: 94
        },
        '0,2': {
          r: '9',
          i: 120
        },
        '5,2': {
          r: '9',
          i: 125
        },
        '4,1': {
          r: '9',
          i: 109
        },
        '3,1': {
          r: '9',
          i: 108
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '2,1': {
          skyobj: '1'
        },
        '0,3': {
          layer: '9'
        },
        '4,1': {
          layer: '9'
        },
        '3,0': {
          layer: '9'
        },
        '1,4': {
          layer: '9'
        },
        '2,2': {
          skyobj: '1'
        },
        '3,3': {
          skyobj: '1'
        },
        '1,0': {
          layer: '9'
        },
        '2,0': {
          layer: '9'
        },
        '0,1': {
          layer: '9'
        },
        '2,3': {
          skyobj: '1'
        },
        '1,1': {
          skyobj: '1'
        },
        '3,2': {
          skyobj: '1'
        },
        '4,3': {
          layer: '9'
        },
        '3,4': {
          layer: '9'
        },
        '1,2': {
          skyobj: '1'
        },
        '0,2': {
          layer: '9'
        },
        '4,2': {
          skyobj: '1'
        },
        '2,4': {
          layer: '9'
        },
        '1,3': {
          skyobj: '1'
        },
        '3,1': {
          skyobj: '1'
        }
      }
    },
    bed4: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 141
        },
        '0,0': {
          r: '6',
          i: 126
        },
        '2,1': {
          r: '6',
          i: 143
        },
        '1,1': {
          r: '6',
          i: 142
        },
        '1,2': {
          r: '6',
          i: 157
        },
        '2,2': {
          r: '6',
          i: 158
        },
        '0,2': {
          r: '6',
          i: 156
        },
        '1,0': {
          r: '6',
          i: 127
        },
        '2,0': {
          r: '6',
          i: 128
        }
      },
      instances: [],
      properties: {},
      tps: {
        '2,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        }
      }
    },
    weapon6: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 20
        }
      },
      instances: [],
      properties: {
        tip: 'shotgun',
        cat: 'weapon'
      },
      tps: {
        '0,0': {
          stuff: '7'
        }
      }
    },
    rock1: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '4',
          i: 63
        },
        '0,0': {
          r: '4',
          i: 48
        },
        '2,1': {
          r: '4',
          i: 65
        },
        '1,1': {
          r: '4',
          i: 64
        },
        '1,2': {
          r: '4',
          i: 79
        },
        '2,2': {
          r: '4',
          i: 80
        },
        '0,2': {
          r: '4',
          i: 78
        },
        '1,0': {
          r: '4',
          i: 49
        },
        '2,0': {
          r: '4',
          i: 50
        }
      },
      instances: [],
      properties: {},
      tps: {
        '2,2': {
          layer: '3'
        },
        '0,0': {
          layer: '3'
        },
        '2,1': {
          layer: '3'
        },
        '1,1': {
          layer: '3'
        },
        '1,2': {
          layer: '3'
        },
        '0,1': {
          layer: '3'
        },
        '0,2': {
          layer: '3'
        },
        '1,0': {
          layer: '3'
        },
        '2,0': {
          layer: '3'
        }
      }
    },
    lib_moveable_4: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 70
        },
        '0,0': {
          r: '6',
          i: 55
        },
        '1,0': {
          r: '6',
          i: 56
        },
        '1,1': {
          r: '6',
          i: 71
        }
      },
      instances: [],
      properties: {
        dlayer: '2',
        cat: 'device',
        device: 'block'
      },
      tps: {}
    },
    bed1: {
      cols: 2,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 184
        },
        '0,0': {
          r: '6',
          i: 169
        },
        '0,2': {
          r: '6',
          i: 199
        },
        '1,0': {
          r: '6',
          i: 170
        },
        '1,1': {
          r: '6',
          i: 185
        },
        '1,2': {
          r: '6',
          i: 200
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        }
      }
    },
    dstc0: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 46
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,2'
        }
      }
    },
    camp2: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 1
        }
      },
      instances: [],
      properties: {
        tip: 'royal',
        cat: 'camp'
      },
      tps: {
        '0,0': {
          camp: '2'
        }
      }
    },
    tileset1: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '0',
          i: 175
        },
        '0,0': {
          r: '0',
          i: 0
        },
        '3,2': {
          r: '0',
          i: 266
        },
        '2,2': {
          r: '0',
          i: 48
        },
        '6,1': {
          r: '0',
          i: 173
        },
        '1,0': {
          r: '0',
          i: 1
        },
        '5,0': {
          r: '0',
          i: 158
        },
        '4,2': {
          r: '0',
          i: 267
        },
        '1,1': {
          r: '0',
          i: 16
        },
        '5,3': {
          r: '0',
          i: 268
        },
        '7,1': {
          r: '0',
          i: 174
        },
        '6,0': {
          r: '0',
          i: 172
        },
        '2,1': {
          r: '0',
          i: 18
        },
        '3,0': {
          r: '0',
          i: 121
        },
        '0,1': {
          r: '0',
          i: 30
        },
        '2,0': {
          r: '0',
          i: 3
        },
        '6,3': {
          r: '0',
          i: 269
        },
        '8,0': {
          r: '0',
          i: 160
        },
        '5,1': {
          r: '0',
          i: 157
        },
        '6,2': {
          r: '0',
          i: 254
        },
        '1,2': {
          r: '0',
          i: 47
        },
        '4,0': {
          r: '0',
          i: 122
        },
        '0,2': {
          r: '0',
          i: 45
        },
        '7,0': {
          r: '0',
          i: 159
        },
        '5,2': {
          r: '0',
          i: 253
        },
        '4,1': {
          r: '0',
          i: 128
        },
        '3,1': {
          r: '0',
          i: 127
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '-1'
        },
        '3,2': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '-1'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          block: '0',
          layer: '-1'
        },
        '5,0': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0',
          layer: '-1'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '2,1': {
          block: '0',
          layer: '-1'
        },
        '3,0': {
          block: '0',
          layer: '-1'
        },
        '0,1': {
          block: '0',
          layer: '-1'
        },
        '2,0': {
          block: '0',
          layer: '-1'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          block: '0',
          layer: '-1'
        },
        '4,0': {
          block: '0',
          layer: '-1'
        },
        '0,2': {
          block: '0',
          layer: '-1'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '-1'
        },
        '3,1': {
          block: '0',
          layer: '-1'
        }
      }
    },
    dstc1: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 2
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,0'
        }
      }
    },
    tree6: {
      cols: 6,
      rows: 6,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 279
        },
        '3,3': {
          r: '4',
          i: 327
        },
        '3,2': {
          r: '4',
          i: 312
        },
        '2,2': {
          r: '4',
          i: 311
        },
        '4,2': {
          r: '4',
          i: 313
        },
        '1,0': {
          r: '4',
          i: 280
        },
        '0,4': {
          r: '4',
          i: 339
        },
        '4,4': {
          r: '4',
          i: 343
        },
        '1,5': {
          r: '4',
          i: 355
        },
        '2,5': {
          r: '4',
          i: 356
        },
        '3,5': {
          r: '4',
          i: 357
        },
        '5,3': {
          r: '4',
          i: 329
        },
        '5,0': {
          r: '4',
          i: 284
        },
        '4,3': {
          r: '4',
          i: 328
        },
        '1,1': {
          r: '4',
          i: 295
        },
        '2,4': {
          r: '4',
          i: 341
        },
        '1,3': {
          r: '4',
          i: 325
        },
        '5,4': {
          r: '4',
          i: 344
        },
        '0,2': {
          r: '4',
          i: 309
        },
        '2,1': {
          r: '4',
          i: 296
        },
        '0,3': {
          r: '4',
          i: 324
        },
        '5,5': {
          r: '4',
          i: 359
        },
        '3,0': {
          r: '4',
          i: 282
        },
        '1,4': {
          r: '4',
          i: 340
        },
        '0,1': {
          r: '4',
          i: 294
        },
        '2,0': {
          r: '4',
          i: 281
        },
        '4,5': {
          r: '4',
          i: 358
        },
        '0,5': {
          r: '4',
          i: 354
        },
        '5,1': {
          r: '4',
          i: 299
        },
        '3,4': {
          r: '4',
          i: 342
        },
        '1,2': {
          r: '4',
          i: 310
        },
        '4,0': {
          r: '4',
          i: 283
        },
        '2,3': {
          r: '4',
          i: 326
        },
        '5,2': {
          r: '4',
          i: 314
        },
        '4,1': {
          r: '4',
          i: 298
        },
        '3,1': {
          r: '4',
          i: 297
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '2,2': {
          layer: '5'
        },
        '2,3': {
          layer: '5'
        },
        '3,2': {
          layer: '5'
        },
        '3,3': {
          layer: '5'
        }
      }
    },
    tree0: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '4',
          i: 15
        },
        '0,0': {
          r: '4',
          i: 0
        },
        '2,1': {
          r: '4',
          i: 17
        },
        '1,1': {
          r: '4',
          i: 16
        },
        '1,2': {
          r: '4',
          i: 31
        },
        '2,2': {
          r: '4',
          i: 32
        },
        '0,2': {
          r: '4',
          i: 30
        },
        '1,0': {
          r: '4',
          i: 1
        },
        '2,0': {
          r: '4',
          i: 2
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '1,1': {
          layer: '3'
        }
      }
    },
    igloo2: {
      cols: 5,
      rows: 6,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '9',
          i: 5
        },
        '3,3': {
          r: '9',
          i: 53
        },
        '3,2': {
          r: '9',
          i: 38
        },
        '2,2': {
          r: '9',
          i: 37
        },
        '4,2': {
          r: '9',
          i: 39
        },
        '1,0': {
          r: '9',
          i: 6
        },
        '0,4': {
          r: '9',
          i: 65
        },
        '4,4': {
          r: '9',
          i: 69
        },
        '1,5': {
          r: '9',
          i: 81
        },
        '2,5': {
          r: '9',
          i: 82
        },
        '3,5': {
          r: '9',
          i: 83
        },
        '4,3': {
          r: '9',
          i: 54
        },
        '1,1': {
          r: '9',
          i: 21
        },
        '2,4': {
          r: '9',
          i: 67
        },
        '1,3': {
          r: '9',
          i: 51
        },
        '2,1': {
          r: '9',
          i: 22
        },
        '0,3': {
          r: '9',
          i: 50
        },
        '3,0': {
          r: '9',
          i: 8
        },
        '1,4': {
          r: '9',
          i: 66
        },
        '0,1': {
          r: '9',
          i: 20
        },
        '2,0': {
          r: '9',
          i: 7
        },
        '2,3': {
          r: '9',
          i: 52
        },
        '3,4': {
          r: '9',
          i: 68
        },
        '1,2': {
          r: '9',
          i: 36
        },
        '4,0': {
          r: '9',
          i: 9
        },
        '0,2': {
          r: '9',
          i: 35
        },
        '4,1': {
          r: '9',
          i: 24
        },
        '3,1': {
          r: '9',
          i: 23
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '2,1': {
          skyobj: '1'
        },
        '0,3': {
          layer: '9'
        },
        '4,1': {
          layer: '9'
        },
        '3,0': {
          layer: '9'
        },
        '1,4': {
          layer: '9'
        },
        '2,2': {
          skyobj: '1'
        },
        '3,3': {
          skyobj: '1'
        },
        '1,0': {
          layer: '9'
        },
        '2,0': {
          layer: '9'
        },
        '0,1': {
          layer: '9'
        },
        '2,3': {
          skyobj: '1'
        },
        '1,1': {
          skyobj: '1'
        },
        '3,2': {
          skyobj: '1'
        },
        '4,3': {
          layer: '9'
        },
        '3,4': {
          layer: '9'
        },
        '1,2': {
          skyobj: '1'
        },
        '0,2': {
          layer: '9'
        },
        '4,2': {
          layer: '9'
        },
        '2,4': {
          skyobj: '1'
        },
        '1,3': {
          skyobj: '1'
        },
        '3,1': {
          skyobj: '1'
        }
      }
    },
    dstbi3: {
      cols: 1,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '8',
          i: 40
        },
        '0,0': {
          r: '8',
          i: 25
        },
        '0,2': {
          r: '8',
          i: 40
        },
        '0,3': {
          r: '8',
          i: 55
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          layer: '0',
          test: 'edge;tilesetC;0,1',
          block: '0'
        },
        '0,0': {
          layer: '0',
          test: 'edge;tilesetC;0,1',
          block: '1'
        },
        '0,2': {
          block: '0',
          layer: '0',
          test: 'edge;tilesetC;0,1'
        },
        '0,3': {
          test: 'edge;tilesetC;0,1',
          block: '1',
          layer: '0'
        }
      }
    },
    rug0: {
      cols: 1,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 20
        },
        '0,0': {
          r: '6',
          i: 5
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          layer: '0'
        },
        '0,0': {
          layer: '0'
        }
      }
    },
    sky029: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '2',
          i: 26
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    house8: {
      cols: 5,
      rows: 4,
      baseLoc: '2,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 105
        },
        '2,1': {
          r: '5',
          i: 122
        },
        '0,3': {
          r: '5',
          i: 150
        },
        '1,3': {
          r: '5',
          i: 151
        },
        '3,0': {
          r: '5',
          i: 108
        },
        '0,1': {
          r: '5',
          i: 120
        },
        '3,3': {
          r: '5',
          i: 153
        },
        '1,0': {
          r: '5',
          i: 106
        },
        '2,0': {
          r: '5',
          i: 107
        },
        '2,2': {
          r: '5',
          i: 137
        },
        '2,3': {
          r: '5',
          i: 152
        },
        '1,1': {
          r: '5',
          i: 121
        },
        '3,2': {
          r: '5',
          i: 138
        },
        '0,2': {
          r: '5',
          i: 135
        },
        '1,2': {
          r: '5',
          i: 136
        },
        '4,0': {
          r: '5',
          i: 109
        },
        '4,3': {
          r: '5',
          i: 154
        },
        '4,2': {
          r: '5',
          i: 139
        },
        '4,1': {
          r: '5',
          i: 124
        },
        '3,1': {
          r: '5',
          i: 123
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '4,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '4,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '4,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '4,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        }
      }
    },
    wallset4: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '1',
          i: 181
        },
        '0,0': {
          r: '1',
          i: 166
        },
        '2,1': {
          r: '1',
          i: 183
        },
        '3,2': {
          r: '1',
          i: 246
        },
        '3,0': {
          r: '1',
          i: 200
        },
        '1,2': {
          r: '1',
          i: 226
        },
        '2,2': {
          r: '1',
          i: 229
        },
        '4,0': {
          r: '1',
          i: 201
        },
        '0,2': {
          r: '1',
          i: 225
        },
        '1,0': {
          r: '1',
          i: 167
        },
        '2,0': {
          r: '1',
          i: 168
        },
        '3,1': {
          r: '1',
          i: 231
        }
      },
      instances: [],
      properties: {
        dlayer: '4',
        cat: 'wallset'
      },
      tps: {
        '2,2': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        },
        '3,2': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '3,1': {
          s: '1'
        }
      }
    },
    pillar7a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 336
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    shadow1_s: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 84
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    bed2: {
      cols: 3,
      rows: 2,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 129
        },
        '0,0': {
          r: '6',
          i: 114
        },
        '2,1': {
          r: '6',
          i: 131
        },
        '1,0': {
          r: '6',
          i: 115
        },
        '1,1': {
          r: '6',
          i: 130
        },
        '2,0': {
          r: '6',
          i: 116
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        }
      }
    },
    table0: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 22
        },
        '0,0': {
          r: '6',
          i: 7
        },
        '2,1': {
          r: '6',
          i: 24
        },
        '1,1': {
          r: '6',
          i: 23
        },
        '1,2': {
          r: '6',
          i: 38
        },
        '2,2': {
          r: '6',
          i: 39
        },
        '0,2': {
          r: '6',
          i: 37
        },
        '1,0': {
          r: '6',
          i: 8
        },
        '2,0': {
          r: '6',
          i: 9
        }
      },
      instances: [],
      properties: {
        dlayer: '1'
      },
      tps: {
        '2,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        }
      }
    },
    tileset6: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '7',
          i: 240
        },
        '0,0': {
          r: '7',
          i: 330
        },
        '3,2': {
          r: '7',
          i: 197
        },
        '8,2': {
          r: '7',
          i: 261
        },
        '9,0': {
          r: '7',
          i: 292
        },
        '2,2': {
          r: '7',
          i: 346
        },
        '6,1': {
          r: '7',
          i: 184
        },
        '1,0': {
          r: '7',
          i: 186
        },
        '5,0': {
          r: '7',
          i: 212
        },
        '8,3': {
          r: '7',
          i: 276
        },
        '4,2': {
          r: '7',
          i: 255
        },
        '1,1': {
          r: '7',
          i: 180
        },
        '5,3': {
          r: '7',
          i: 213
        },
        '7,1': {
          r: '7',
          i: 241
        },
        '6,0': {
          r: '7',
          i: 169
        },
        '7,3': {
          r: '7',
          i: 275
        },
        '2,1': {
          r: '7',
          i: 171
        },
        '3,1': {
          r: '7',
          i: 375
        },
        '9,3': {
          r: '7',
          i: 277
        },
        '3,0': {
          r: '7',
          i: 360
        },
        '0,1': {
          r: '7',
          i: 170
        },
        '9,1': {
          r: '7',
          i: 307
        },
        '9,2': {
          r: '7',
          i: 262
        },
        '6,3': {
          r: '7',
          i: 182
        },
        '8,0': {
          r: '7',
          i: 242
        },
        '7,2': {
          r: '7',
          i: 260
        },
        '5,1': {
          r: '7',
          i: 244
        },
        '2,0': {
          r: '7',
          i: 331
        },
        '1,2': {
          r: '7',
          i: 185
        },
        '4,0': {
          r: '7',
          i: 361
        },
        '0,2': {
          r: '7',
          i: 345
        },
        '7,0': {
          r: '7',
          i: 243
        },
        '5,2': {
          r: '7',
          i: 259
        },
        '4,1': {
          r: '7',
          i: 376
        },
        '6,2': {
          r: '7',
          i: 211
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '0.5'
        },
        '3,2': {
          block: '0'
        },
        '8,2': {
          block: '0'
        },
        '9,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '0.5'
        },
        '9,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          block: '0',
          layer: '0.5'
        },
        '5,0': {
          block: '0'
        },
        '8,3': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0',
          layer: '1'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '7,3': {
          block: '0'
        },
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '9,3': {
          block: '0'
        },
        '3,0': {
          block: '0',
          layer: '1'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '9,1': {
          block: '0'
        },
        '2,0': {
          block: '0',
          layer: '0.5'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '7,2': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          block: '0',
          layer: '0.5'
        },
        '4,0': {
          block: '0',
          layer: '1'
        },
        '0,2': {
          block: '0',
          layer: '0.5'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '1'
        },
        '3,1': {
          block: '0',
          layer: '1'
        }
      }
    },
    house7: {
      cols: 4,
      rows: 6,
      baseLoc: '1,2',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 4
        },
        '2,1': {
          r: '0',
          i: 21
        },
        '0,3': {
          r: '0',
          i: 49
        },
        '3,0': {
          r: '0',
          i: 7
        },
        '1,4': {
          r: '0',
          i: 80
        },
        '2,2': {
          r: '0',
          i: 36
        },
        '3,3': {
          r: '0',
          i: 52
        },
        '1,0': {
          r: '0',
          i: 5
        },
        '0,4': {
          r: '0',
          i: 79
        },
        '2,0': {
          r: '0',
          i: 6
        },
        '0,1': {
          r: '0',
          i: 19
        },
        '1,5': {
          r: '0',
          i: 95
        },
        '2,3': {
          r: '0',
          i: 51
        },
        '3,5': {
          r: '0',
          i: 97
        },
        '3,2': {
          r: '0',
          i: 37
        },
        '0,2': {
          r: '0',
          i: 34
        },
        '3,4': {
          r: '0',
          i: 82
        },
        '1,2': {
          r: '0',
          i: 35
        },
        '0,5': {
          r: '0',
          i: 94
        },
        '2,5': {
          r: '0',
          i: 96
        },
        '1,1': {
          r: '0',
          i: 20
        },
        '2,4': {
          r: '0',
          i: 81
        },
        '1,3': {
          r: '0',
          i: 50
        },
        '3,1': {
          r: '0',
          i: 22
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '3,5': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,5': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,5': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '0,5': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        }
      }
    },
    shine3_s: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 380
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    rock3: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 91
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1.5'
        }
      }
    },
    pillar5a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 267
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    shine1_s: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 350
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    weapon1: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 16
        }
      },
      instances: [],
      properties: {
        tip: 'hook',
        cat: 'weapon'
      },
      tps: {
        '0,0': {
          stuff: '4'
        }
      }
    },
    table5: {
      cols: 5,
      rows: 3,
      baseLoc: '4,2',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '6',
          i: 110
        },
        '3,2': {
          r: '6',
          i: 78
        },
        '1,2': {
          r: '6',
          i: 76
        },
        '2,2': {
          r: '6',
          i: 77
        },
        '4,0': {
          r: '6',
          i: 45
        },
        '4,2': {
          r: '6',
          i: 111
        },
        '4,1': {
          r: '6',
          i: 61
        }
      },
      instances: [],
      properties: {},
      tps: {
        '4,2': {
          layer: '1'
        },
        '3,2': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '4,0': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '4,1': {
          layer: '1'
        }
      }
    },
    tmDef: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 4
        }
      },
      instances: [],
      properties: {
        tip: 'def',
        cat: 'team'
      },
      tps: {
        '0,0': {
          team: 'def'
        }
      }
    },
    pillar6a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 250
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    lib_moveable_3_ice: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '4',
          i: 26
        },
        '0,0': {
          r: '4',
          i: 11
        },
        '1,0': {
          r: '4',
          i: 12
        },
        '1,1': {
          r: '4',
          i: 27
        }
      },
      instances: [],
      properties: {
        dlayer: '1.5',
        cat: 'device',
        device: 'block'
      },
      tps: {}
    },
    decobj2: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 217
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        }
      }
    },
    tilesetB: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '8',
          i: 77
        },
        '0,0': {
          r: '8',
          i: 0
        },
        '3,2': {
          r: '8',
          i: 90
        },
        '2,2': {
          r: '8',
          i: 32
        },
        '6,1': {
          r: '8',
          i: 60
        },
        '1,0': {
          r: '8',
          i: 1
        },
        '5,0': {
          r: '8',
          i: 45
        },
        '4,2': {
          r: '8',
          i: 75
        },
        '1,1': {
          r: '8',
          i: 16
        },
        '5,3': {
          r: '8',
          i: 195
        },
        '7,1': {
          r: '8',
          i: 76
        },
        '6,0': {
          r: '8',
          i: 47
        },
        '2,1': {
          r: '8',
          i: 17
        },
        '3,0': {
          r: '8',
          i: 0
        },
        '0,1': {
          r: '8',
          i: 15
        },
        '2,0': {
          r: '8',
          i: 2
        },
        '6,3': {
          r: '8',
          i: 196
        },
        '8,0': {
          r: '8',
          i: 62
        },
        '5,1': {
          r: '8',
          i: 46
        },
        '6,2': {
          r: '8',
          i: 181
        },
        '1,2': {
          r: '8',
          i: 31
        },
        '4,0': {
          r: '8',
          i: 16
        },
        '0,2': {
          r: '8',
          i: 30
        },
        '7,0': {
          r: '8',
          i: 61
        },
        '5,2': {
          r: '8',
          i: 180
        },
        '4,1': {
          r: '8',
          i: 32
        },
        '3,1': {
          r: '8',
          i: 30
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '2,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '3,0': {
          block: '0'
        },
        '0,1': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '4,0': {
          block: '0'
        },
        '0,2': {
          block: '0'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '0'
        },
        '3,1': {
          block: '0'
        }
      }
    },
    rock4: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 90
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1.5'
        }
      }
    },
    shadow2_w: {
      cols: 2,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 81
        },
        '1,0': {
          r: '4',
          i: 82
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    shine2_w: {
      cols: 2,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 332
        },
        '1,0': {
          r: '4',
          i: 333
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    sky017: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 104
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    fireplace0: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 149
        },
        '0,0': {
          r: '6',
          i: 134
        },
        '0,2': {
          r: '6',
          i: 164
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          layer: '3'
        },
        '0,0': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        }
      }
    },
    dstb3: {
      cols: 1,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '0',
          i: 178
        },
        '0,0': {
          r: '0',
          i: 163
        },
        '0,2': {
          r: '0',
          i: 178
        },
        '0,3': {
          r: '0',
          i: 193
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          layer: '0.5',
          test: 'edge;tileset1;0,1'
        },
        '0,0': {
          test: 'edge;tileset1;0,1'
        },
        '0,2': {
          layer: '0.5',
          test: 'edge;tileset1;0,1'
        },
        '0,3': {
          test: 'edge;tileset1;0,1'
        }
      }
    },
    pillar2: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '1',
          i: 208
        },
        '0,0': {
          r: '1',
          i: 176
        },
        '1,0': {
          r: '1',
          i: 209
        },
        '1,1': {
          r: '1',
          i: 239
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        },
        '1,1': {
          s: '1',
          layer: '9'
        }
      }
    },
    wallset7: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '7',
          i: 130
        },
        '0,0': {
          r: '7',
          i: 86
        },
        '2,1': {
          r: '7',
          i: 134
        },
        '3,2': {
          r: '7',
          i: 89
        },
        '3,0': {
          r: '7',
          i: 72
        },
        '1,2': {
          r: '7',
          i: 148
        },
        '2,2': {
          r: '7',
          i: 149
        },
        '4,0': {
          r: '7',
          i: 73
        },
        '0,2': {
          r: '7',
          i: 145
        },
        '1,0': {
          r: '7',
          i: 87
        },
        '2,0': {
          r: '7',
          i: 88
        },
        '3,1': {
          r: '7',
          i: 74
        }
      },
      instances: [],
      properties: {
        dlayer: '4',
        cat: 'wallset'
      },
      tps: {
        '2,2': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        },
        '3,2': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '3,1': {
          s: '1'
        }
      }
    },
    tree5: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '4',
          i: 321
        },
        '0,0': {
          r: '4',
          i: 306
        },
        '2,1': {
          r: '4',
          i: 323
        },
        '1,1': {
          r: '4',
          i: 322
        },
        '1,2': {
          r: '4',
          i: 337
        },
        '2,2': {
          r: '4',
          i: 338
        },
        '0,2': {
          r: '4',
          i: 336
        },
        '1,0': {
          r: '4',
          i: 307
        },
        '2,0': {
          r: '4',
          i: 308
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '1,1': {
          layer: '3'
        }
      }
    },
    tilesetC: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '8',
          i: 114
        },
        '0,0': {
          r: '8',
          i: 10
        },
        '3,2': {
          r: '8',
          i: 39
        },
        '2,2': {
          r: '8',
          i: 74
        },
        '6,1': {
          r: '8',
          i: 69
        },
        '1,0': {
          r: '8',
          i: 57
        },
        '5,0': {
          r: '8',
          i: 54
        },
        '4,2': {
          r: '8',
          i: 24
        },
        '1,1': {
          r: '8',
          i: 42
        },
        '5,3': {
          r: '8',
          i: 143
        },
        '7,1': {
          r: '8',
          i: 113
        },
        '6,0': {
          r: '8',
          i: 84
        },
        '2,1': {
          r: '8',
          i: 41
        },
        '3,0': {
          r: '8',
          i: 26
        },
        '0,1': {
          r: '8',
          i: 43
        },
        '2,0': {
          r: '8',
          i: 14
        },
        '6,3': {
          r: '8',
          i: 144
        },
        '8,0': {
          r: '8',
          i: 99
        },
        '5,1': {
          r: '8',
          i: 83
        },
        '6,2': {
          r: '8',
          i: 129
        },
        '1,2': {
          r: '8',
          i: 27
        },
        '4,0': {
          r: '8',
          i: 28
        },
        '0,2': {
          r: '8',
          i: 70
        },
        '7,0': {
          r: '8',
          i: 98
        },
        '5,2': {
          r: '8',
          i: 128
        },
        '4,1': {
          r: '8',
          i: 58
        },
        '3,1': {
          r: '8',
          i: 56
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '1',
          layer: '0.5'
        },
        '3,2': {
          block: '0'
        },
        '2,2': {
          block: '1',
          layer: '0.5'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          block: '1',
          layer: '0.5'
        },
        '5,0': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0',
          layer: '1'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '2,1': {
          block: '1',
          layer: '0.5'
        },
        '3,0': {
          block: '1',
          layer: '0.5'
        },
        '0,1': {
          block: '1',
          layer: '0.5'
        },
        '2,0': {
          block: '1',
          layer: '0.5'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          block: '1',
          layer: '0.5'
        },
        '4,0': {
          block: '1',
          layer: '0.5'
        },
        '0,2': {
          block: '1',
          layer: '0.5'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '1',
          layer: '0.5'
        },
        '3,1': {
          block: '1',
          layer: '0.5'
        }
      }
    },
    shine2_e: {
      cols: 2,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 347
        },
        '1,0': {
          r: '4',
          i: 348
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    sky038: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 140
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    sky030: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '2',
          i: 66
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    bridge2: {
      cols: 9,
      rows: 5,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '1',
          i: 85
        },
        '0,0': {
          r: '1',
          i: 267
        },
        '3,3': {
          r: '1',
          i: 202
        },
        '3,2': {
          r: '1',
          i: 267
        },
        '8,2': {
          r: '1',
          i: 85
        },
        '2,2': {
          r: '4',
          i: 384
        },
        '6,1': {
          r: '4',
          i: 371
        },
        '1,0': {
          r: '4',
          i: 369
        },
        '0,4': {
          r: '1',
          i: 187
        },
        '8,3': {
          r: '1',
          i: 189
        },
        '4,2': {
          r: '4',
          i: 370
        },
        '1,1': {
          r: '1',
          i: 104
        },
        '5,3': {
          r: '1',
          i: 99
        },
        '5,0': {
          r: '1',
          i: 98
        },
        '7,1': {
          r: '1',
          i: 160
        },
        '4,3': {
          r: '1',
          i: 267
        },
        '6,0': {
          r: '1',
          i: 267
        },
        '7,3': {
          r: '1',
          i: 188
        },
        '0,2': {
          r: '1',
          i: 267
        },
        '2,1': {
          r: '1',
          i: 104
        },
        '0,3': {
          r: '1',
          i: 172
        },
        '2,4': {
          r: '1',
          i: 132
        },
        '1,3': {
          r: '1',
          i: 190
        },
        '3,0': {
          r: '1',
          i: 267
        },
        '1,4': {
          r: '1',
          i: 132
        },
        '0,1': {
          r: '1',
          i: 83
        },
        '6,2': {
          r: '4',
          i: 371
        },
        '6,3': {
          r: '1',
          i: 267
        },
        '8,0': {
          r: '1',
          i: 174
        },
        '7,2': {
          r: '1',
          i: 160
        },
        '5,1': {
          r: '1',
          i: 104
        },
        '2,0': {
          r: '4',
          i: 369
        },
        '1,2': {
          r: '4',
          i: 384
        },
        '4,0': {
          r: '1',
          i: 267
        },
        '2,3': {
          r: '1',
          i: 190
        },
        '7,0': {
          r: '1',
          i: 173
        },
        '5,2': {
          r: '1',
          i: 104
        },
        '4,1': {
          r: '4',
          i: 370
        },
        '3,4': {
          r: '1',
          i: 217
        },
        '3,1': {
          r: '1',
          i: 84
        }
      },
      instances: [],
      properties: {
        size: '2',
        cat: 'bridge'
      },
      tps: {
        '0,0': {
          s: '1',
          layer: '3'
        },
        '2,1': {
          layer: '1',
          block: '0'
        },
        '3,2': {
          s: '1',
          layer: '3'
        },
        '6,0': {
          s: '1',
          layer: '3'
        },
        '3,0': {
          s: '1',
          layer: '3'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '0,2': {
          s: '1',
          layer: '3'
        },
        '5,0': {
          block: '0',
          layer: '0.5'
        },
        '6,3': {
          s: '1',
          layer: '3'
        },
        '5,1': {
          layer: '1',
          block: '0'
        },
        '1,1': {
          layer: '1',
          block: '0'
        },
        '5,3': {
          block: '0',
          layer: '0.5'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '4,0': {
          s: '1',
          layer: '3'
        },
        '4,3': {
          s: '1',
          layer: '3'
        },
        '5,2': {
          layer: '1',
          block: '0'
        }
      }
    },
    sky007: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 336
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    pillar4: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '5',
          i: 62
        },
        '0,0': {
          r: '5',
          i: 32
        },
        '1,0': {
          r: '5',
          i: 36
        },
        '1,1': {
          r: '5',
          i: 66
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        },
        '1,1': {
          s: '1',
          layer: '9'
        }
      }
    },
    water1: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '2',
          i: 96
        },
        '2,1': {
          r: '2',
          i: 113
        },
        '3,0': {
          r: '2',
          i: 99
        },
        '0,1': {
          r: '2',
          i: 111
        },
        '1,0': {
          r: '2',
          i: 97
        },
        '2,0': {
          r: '2',
          i: 98
        },
        '2,2': {
          r: '2',
          i: 128
        },
        '1,1': {
          r: '2',
          i: 112
        },
        '1,2': {
          r: '2',
          i: 127
        },
        '4,0': {
          r: '2',
          i: 100
        },
        '0,2': {
          r: '2',
          i: 126
        },
        '4,1': {
          r: '2',
          i: 115
        },
        '3,1': {
          r: '2',
          i: 114
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '0,0': {
          water: '1'
        },
        '2,1': {
          water: '1'
        },
        '3,0': {
          water: '1'
        },
        '2,2': {
          water: '1'
        },
        '1,0': {
          water: '1'
        },
        '2,0': {
          water: '1'
        },
        '0,1': {
          water: '1'
        },
        '1,1': {
          water: '1'
        },
        '1,2': {
          water: '1'
        },
        '4,0': {
          water: '1'
        },
        '0,2': {
          water: '1'
        },
        '4,1': {
          water: '1'
        },
        '3,1': {
          water: '1'
        }
      }
    },
    pillar3: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '1',
          i: 315
        },
        '0,0': {
          r: '1',
          i: 285
        },
        '1,0': {
          r: '1',
          i: 258
        },
        '1,1': {
          r: '1',
          i: 286
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        },
        '1,1': {
          s: '1',
          layer: '9'
        }
      }
    },
    sky046: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 142
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    house1: {
      cols: 4,
      rows: 5,
      baseLoc: '1,2',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 195
        },
        '2,1': {
          r: '4',
          i: 212
        },
        '0,3': {
          r: '4',
          i: 240
        },
        '3,0': {
          r: '4',
          i: 198
        },
        '1,4': {
          r: '4',
          i: 256
        },
        '2,2': {
          r: '4',
          i: 227
        },
        '3,3': {
          r: '4',
          i: 243
        },
        '1,0': {
          r: '4',
          i: 196
        },
        '0,4': {
          r: '4',
          i: 255
        },
        '2,0': {
          r: '4',
          i: 197
        },
        '0,1': {
          r: '4',
          i: 210
        },
        '2,3': {
          r: '4',
          i: 242
        },
        '1,1': {
          r: '4',
          i: 211
        },
        '3,2': {
          r: '4',
          i: 228
        },
        '3,4': {
          r: '4',
          i: 258
        },
        '1,2': {
          r: '4',
          i: 226
        },
        '0,2': {
          r: '4',
          i: 225
        },
        '2,4': {
          r: '4',
          i: 257
        },
        '1,3': {
          r: '4',
          i: 241
        },
        '3,1': {
          r: '4',
          i: 213
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,4': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '0,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,4': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        }
      }
    },
    boxStair1: {
      cols: 2,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 247
        },
        '1,0': {
          r: '0',
          i: 113
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          block: '0',
          layer: '0.5',
          test: 'flat'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1'
        }
      }
    },
    shine2_n: {
      cols: 1,
      rows: 2,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '4',
          i: 349
        },
        '0,0': {
          r: '4',
          i: 334
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    sky012: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 76
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    table04: {
      cols: 7,
      rows: 7,
      baseLoc: '3,3',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 7
        },
        '3,3': {
          r: '6',
          i: 23
        },
        '3,2': {
          r: '6',
          i: 23
        },
        '3,1': {
          r: '6',
          i: 23
        },
        '6,6': {
          r: '6',
          i: 39
        },
        '1,6': {
          r: '6',
          i: 38
        },
        '2,2': {
          r: '6',
          i: 23
        },
        '4,2': {
          r: '6',
          i: 23
        },
        '1,0': {
          r: '6',
          i: 8
        },
        '0,4': {
          r: '6',
          i: 22
        },
        '4,4': {
          r: '6',
          i: 23
        },
        '1,5': {
          r: '6',
          i: 23
        },
        '2,5': {
          r: '6',
          i: 23
        },
        '1,1': {
          r: '6',
          i: 23
        },
        '5,3': {
          r: '6',
          i: 23
        },
        '5,0': {
          r: '6',
          i: 8
        },
        '3,5': {
          r: '6',
          i: 23
        },
        '3,6': {
          r: '6',
          i: 38
        },
        '6,1': {
          r: '6',
          i: 24
        },
        '2,4': {
          r: '6',
          i: 23
        },
        '1,3': {
          r: '6',
          i: 23
        },
        '5,4': {
          r: '6',
          i: 23
        },
        '4,0': {
          r: '6',
          i: 8
        },
        '0,2': {
          r: '6',
          i: 22
        },
        '2,1': {
          r: '6',
          i: 23
        },
        '0,3': {
          r: '6',
          i: 22
        },
        '6,0': {
          r: '6',
          i: 9
        },
        '5,5': {
          r: '6',
          i: 23
        },
        '3,0': {
          r: '6',
          i: 8
        },
        '1,4': {
          r: '6',
          i: 23
        },
        '0,1': {
          r: '6',
          i: 22
        },
        '6,4': {
          r: '6',
          i: 24
        },
        '0,6': {
          r: '6',
          i: 37
        },
        '4,6': {
          r: '6',
          i: 38
        },
        '6,2': {
          r: '6',
          i: 24
        },
        '6,3': {
          r: '6',
          i: 24
        },
        '5,6': {
          r: '6',
          i: 38
        },
        '0,5': {
          r: '6',
          i: 22
        },
        '5,1': {
          r: '6',
          i: 23
        },
        '4,3': {
          r: '6',
          i: 23
        },
        '2,0': {
          r: '6',
          i: 8
        },
        '2,6': {
          r: '6',
          i: 38
        },
        '4,5': {
          r: '6',
          i: 23
        },
        '6,5': {
          r: '6',
          i: 24
        },
        '2,3': {
          r: '6',
          i: 23
        },
        '5,2': {
          r: '6',
          i: 23
        },
        '4,1': {
          r: '6',
          i: 23
        },
        '3,4': {
          r: '6',
          i: 23
        },
        '1,2': {
          r: '6',
          i: 23
        }
      },
      instances: [],
      properties: {
        dlayer: '1'
      },
      tps: {
        '6,3': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '3,3': {
          layer: '1'
        },
        '3,2': {
          layer: '1'
        },
        '4,1': {
          layer: '1'
        },
        '1,6': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '6,2': {
          layer: '1'
        },
        '4,2': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '0,4': {
          layer: '1'
        },
        '4,4': {
          layer: '1'
        },
        '1,5': {
          layer: '1'
        },
        '2,5': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '5,3': {
          layer: '1'
        },
        '5,0': {
          layer: '1'
        },
        '5,1': {
          layer: '1'
        },
        '3,6': {
          layer: '1'
        },
        '6,1': {
          layer: '1'
        },
        '2,4': {
          layer: '1'
        },
        '1,3': {
          layer: '1'
        },
        '5,4': {
          layer: '1'
        },
        '6,5': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '0,3': {
          layer: '1'
        },
        '6,0': {
          layer: '1'
        },
        '5,5': {
          layer: '1'
        },
        '3,0': {
          layer: '1'
        },
        '1,4': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '6,4': {
          layer: '1'
        },
        '0,6': {
          layer: '1'
        },
        '4,6': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '2,6': {
          layer: '1'
        },
        '5,6': {
          layer: '1'
        },
        '0,5': {
          layer: '1'
        },
        '2,3': {
          layer: '1'
        },
        '4,3': {
          layer: '1'
        },
        '3,4': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '4,5': {
          layer: '1'
        },
        '4,0': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '5,2': {
          layer: '1'
        },
        '3,5': {
          layer: '1'
        },
        '6,6': {
          layer: '1'
        },
        '3,1': {
          layer: '1'
        }
      }
    },
    sky026: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 165
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    sky035: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 217
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    tree3: {
      cols: 6,
      rows: 6,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 113
        },
        '3,3': {
          r: '4',
          i: 161
        },
        '3,2': {
          r: '4',
          i: 146
        },
        '2,2': {
          r: '4',
          i: 145
        },
        '4,2': {
          r: '4',
          i: 147
        },
        '1,0': {
          r: '4',
          i: 114
        },
        '0,4': {
          r: '4',
          i: 173
        },
        '4,4': {
          r: '4',
          i: 177
        },
        '1,5': {
          r: '4',
          i: 189
        },
        '2,5': {
          r: '4',
          i: 190
        },
        '3,5': {
          r: '4',
          i: 191
        },
        '5,3': {
          r: '4',
          i: 163
        },
        '5,0': {
          r: '4',
          i: 118
        },
        '4,3': {
          r: '4',
          i: 162
        },
        '1,1': {
          r: '4',
          i: 129
        },
        '2,4': {
          r: '4',
          i: 175
        },
        '1,3': {
          r: '4',
          i: 159
        },
        '5,4': {
          r: '4',
          i: 178
        },
        '0,2': {
          r: '4',
          i: 143
        },
        '2,1': {
          r: '4',
          i: 130
        },
        '0,3': {
          r: '4',
          i: 158
        },
        '3,0': {
          r: '4',
          i: 116
        },
        '1,4': {
          r: '4',
          i: 174
        },
        '0,1': {
          r: '4',
          i: 128
        },
        '2,0': {
          r: '4',
          i: 115
        },
        '4,5': {
          r: '4',
          i: 192
        },
        '5,1': {
          r: '4',
          i: 133
        },
        '3,4': {
          r: '4',
          i: 176
        },
        '1,2': {
          r: '4',
          i: 144
        },
        '4,0': {
          r: '4',
          i: 117
        },
        '2,3': {
          r: '4',
          i: 160
        },
        '5,2': {
          r: '4',
          i: 148
        },
        '4,1': {
          r: '4',
          i: 132
        },
        '3,1': {
          r: '4',
          i: 131
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '2,2': {
          layer: '5'
        },
        '2,3': {
          layer: '5'
        },
        '3,2': {
          layer: '5'
        },
        '3,3': {
          layer: '5'
        }
      }
    },
    stair1: {
      cols: 2,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 133
        },
        '1,0': {
          r: '0',
          i: 134
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset0;1,2'
        },
        '1,0': {
          layer: '0.5',
          test: 'edge;tileset0;1,2'
        }
      }
    },
    house0: {
      cols: 5,
      rows: 4,
      baseLoc: '2,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 199
        },
        '2,1': {
          r: '4',
          i: 216
        },
        '0,3': {
          r: '4',
          i: 244
        },
        '1,3': {
          r: '4',
          i: 245
        },
        '3,0': {
          r: '4',
          i: 202
        },
        '0,1': {
          r: '4',
          i: 214
        },
        '3,3': {
          r: '4',
          i: 247
        },
        '1,0': {
          r: '4',
          i: 200
        },
        '2,0': {
          r: '4',
          i: 201
        },
        '2,2': {
          r: '4',
          i: 231
        },
        '2,3': {
          r: '4',
          i: 246
        },
        '1,1': {
          r: '4',
          i: 215
        },
        '3,2': {
          r: '4',
          i: 232
        },
        '0,2': {
          r: '4',
          i: 229
        },
        '1,2': {
          r: '4',
          i: 230
        },
        '4,0': {
          r: '4',
          i: 203
        },
        '4,3': {
          r: '4',
          i: 248
        },
        '4,2': {
          r: '4',
          i: 233
        },
        '4,1': {
          r: '4',
          i: 218
        },
        '3,1': {
          r: '4',
          i: 217
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '4,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '4,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '4,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        }
      }
    },
    igloo3: {
      cols: 6,
      rows: 5,
      baseLoc: '3,2',
      origin: '0,0',
      tiles: {
        '3,3': {
          r: '9',
          i: 144
        },
        '3,2': {
          r: '9',
          i: 129
        },
        '2,2': {
          r: '9',
          i: 128
        },
        '4,2': {
          r: '9',
          i: 130
        },
        '1,0': {
          r: '9',
          i: 97
        },
        '5,0': {
          r: '9',
          i: 101
        },
        '4,4': {
          r: '9',
          i: 160
        },
        '1,1': {
          r: '9',
          i: 112
        },
        '5,3': {
          r: '9',
          i: 146
        },
        '5,1': {
          r: '9',
          i: 116
        },
        '4,3': {
          r: '9',
          i: 145
        },
        '2,4': {
          r: '9',
          i: 158
        },
        '1,3': {
          r: '9',
          i: 142
        },
        '5,4': {
          r: '9',
          i: 161
        },
        '2,1': {
          r: '9',
          i: 113
        },
        '0,3': {
          r: '9',
          i: 141
        },
        '3,0': {
          r: '9',
          i: 99
        },
        '1,4': {
          r: '9',
          i: 157
        },
        '0,1': {
          r: '9',
          i: 111
        },
        '2,0': {
          r: '9',
          i: 98
        },
        '2,3': {
          r: '9',
          i: 143
        },
        '3,4': {
          r: '9',
          i: 159
        },
        '1,2': {
          r: '9',
          i: 127
        },
        '4,0': {
          r: '9',
          i: 100
        },
        '0,2': {
          r: '9',
          i: 126
        },
        '5,2': {
          r: '9',
          i: 131
        },
        '4,1': {
          r: '9',
          i: 115
        },
        '3,1': {
          r: '9',
          i: 114
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '2,1': {
          skyobj: '1'
        },
        '3,2': {
          skyobj: '1'
        },
        '5,2': {
          layer: '9'
        },
        '4,1': {
          skyobj: '1'
        },
        '3,0': {
          layer: '9'
        },
        '2,2': {
          skyobj: '1'
        },
        '4,4': {
          layer: '9'
        },
        '3,3': {
          skyobj: '1'
        },
        '5,1': {
          layer: '9'
        },
        '2,0': {
          layer: '9'
        },
        '2,3': {
          skyobj: '1'
        },
        '1,1': {
          layer: '9'
        },
        '5,3': {
          layer: '9'
        },
        '3,4': {
          layer: '9'
        },
        '1,2': {
          skyobj: '1'
        },
        '4,0': {
          layer: '9'
        },
        '4,3': {
          skyobj: '1'
        },
        '4,2': {
          skyobj: '1'
        },
        '2,4': {
          layer: '9'
        },
        '1,3': {
          layer: '9'
        },
        '3,1': {
          skyobj: '1'
        }
      }
    },
    lib_moveable_6: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 351
        },
        '2,0': {
          r: '4',
          i: 353
        },
        '1,0': {
          r: '4',
          i: 352
        }
      },
      instances: [],
      properties: {
        dlayer: '2',
        cat: 'device',
        device: 'block'
      },
      tps: {}
    },
    sky045: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 23
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    boxStair3: {
      cols: 1,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '0',
          i: 262
        },
        '0,0': {
          r: '0',
          i: 114
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          layer: '0.5',
          test: 'flat',
          block: '0'
        },
        '0,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1'
        }
      }
    },
    fireplace1: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 183
        },
        '0,0': {
          r: '6',
          i: 168
        },
        '0,2': {
          r: '6',
          i: 198
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          layer: '3'
        },
        '0,0': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        }
      }
    },
    wallset2: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '1',
          i: 191
        },
        '0,0': {
          r: '1',
          i: 176
        },
        '2,1': {
          r: '1',
          i: 193
        },
        '3,2': {
          r: '1',
          i: 249
        },
        '3,0': {
          r: '1',
          i: 203
        },
        '1,2': {
          r: '1',
          i: 238
        },
        '2,2': {
          r: '1',
          i: 239
        },
        '4,0': {
          r: '1',
          i: 204
        },
        '0,2': {
          r: '1',
          i: 208
        },
        '1,0': {
          r: '1',
          i: 177
        },
        '2,0': {
          r: '1',
          i: 178
        },
        '3,1': {
          r: '1',
          i: 234
        }
      },
      instances: [],
      properties: {
        dlayer: '6',
        cat: 'wallset'
      },
      tps: {
        '2,2': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        },
        '3,2': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '3,1': {
          s: '1'
        }
      }
    },
    dstbi1a: {
      cols: 4,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 86
        },
        '1,0': {
          r: '8',
          i: 87
        },
        '2,0': {
          r: '8',
          i: 87
        },
        '3,0': {
          r: '8',
          i: 88
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0',
          test: 'edge;tilesetD;1,0',
          block: '1'
        },
        '1,0': {
          layer: '0',
          test: 'edge;tilesetD;1,0',
          block: '0'
        },
        '2,0': {
          layer: '0',
          test: 'edge;tilesetD;1,0',
          block: '0'
        },
        '3,0': {
          layer: '0',
          test: 'edge;tilesetD;1,0',
          block: '1'
        }
      }
    },
    bridge0: {
      cols: 7,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 194
        },
        '2,1': {
          r: '4',
          i: 107
        },
        '3,2': {
          r: '4',
          i: 124
        },
        '5,2': {
          r: '4',
          i: 140
        },
        '3,0': {
          r: '4',
          i: 239
        },
        '0,1': {
          r: '4',
          i: 105
        },
        '4,2': {
          r: '4',
          i: 252
        },
        '1,0': {
          r: '4',
          i: 237
        },
        '5,0': {
          r: '4',
          i: 95
        },
        '2,0': {
          r: '4',
          i: 237
        },
        '6,3': {
          r: '4',
          i: 156
        },
        '2,2': {
          r: '4',
          i: 122
        },
        '5,1': {
          r: '4',
          i: 125
        },
        '1,1': {
          r: '4',
          i: 106
        },
        '5,3': {
          r: '4',
          i: 155
        },
        '0,2': {
          r: '4',
          i: 120
        },
        '6,2': {
          r: '4',
          i: 141
        },
        '1,2': {
          r: '4',
          i: 121
        },
        '4,0': {
          r: '4',
          i: 224
        },
        '4,3': {
          r: '4',
          i: 267
        },
        '6,1': {
          r: '4',
          i: 126
        },
        '6,0': {
          r: '4',
          i: 96
        },
        '4,1': {
          r: '4',
          i: 252
        },
        '3,1': {
          r: '4',
          i: 109
        }
      },
      instances: [],
      properties: {
        size: '1',
        cat: 'bridge'
      },
      tps: {
        '2,1': {
          block: '0',
          layer: '1'
        },
        '1,1': {
          block: '0',
          layer: '1'
        },
        '5,3': {
          block: '0',
          layer: '0.5'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '5,1': {
          layer: '1',
          block: '0'
        },
        '5,2': {
          block: '0',
          layer: '1'
        },
        '5,0': {
          block: '0',
          layer: '0.5'
        }
      }
    },
    lava: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '2',
          i: 55
        },
        '2,1': {
          r: '2',
          i: 72
        },
        '3,0': {
          r: '2',
          i: 38
        },
        '0,1': {
          r: '2',
          i: 70
        },
        '1,0': {
          r: '2',
          i: 56
        },
        '2,0': {
          r: '2',
          i: 57
        },
        '2,2': {
          r: '2',
          i: 87
        },
        '1,1': {
          r: '2',
          i: 21
        },
        '1,2': {
          r: '2',
          i: 86
        },
        '4,0': {
          r: '2',
          i: 39
        },
        '0,2': {
          r: '2',
          i: 85
        },
        '4,1': {
          r: '2',
          i: 54
        },
        '3,1': {
          r: '2',
          i: 53
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '0,0': {
          lava: '1'
        },
        '2,1': {
          lava: '1'
        },
        '3,0': {
          lava: '1'
        },
        '2,2': {
          lava: '1'
        },
        '1,0': {
          lava: '1'
        },
        '2,0': {
          lava: '1'
        },
        '0,1': {
          lava: '1'
        },
        '1,1': {
          lava: '1'
        },
        '1,2': {
          lava: '1'
        },
        '4,0': {
          lava: '1'
        },
        '0,2': {
          lava: '1'
        },
        '4,1': {
          lava: '1'
        },
        '3,1': {
          lava: '1'
        }
      }
    },
    pillar4a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 77
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    sky009: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 77
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    table3: {
      cols: 3,
      rows: 5,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 12
        },
        '0,3': {
          r: '6',
          i: 57
        },
        '0,1': {
          r: '6',
          i: 27
        },
        '0,2': {
          r: '6',
          i: 42
        },
        '1,0': {
          r: '6',
          i: 13
        },
        '0,4': {
          r: '6',
          i: 72
        },
        '2,0': {
          r: '6',
          i: 14
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        },
        '0,3': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '0,4': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        }
      }
    },
    dstbi2a: {
      cols: 1,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '8',
          i: 119
        },
        '0,0': {
          r: '8',
          i: 104
        },
        '0,2': {
          r: '8',
          i: 119
        },
        '0,3': {
          r: '8',
          i: 134
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          layer: '0',
          test: 'edge;tilesetD;2,1',
          block: '0'
        },
        '0,0': {
          layer: '0',
          test: 'edge;tilesetD;2,1',
          block: '1'
        },
        '0,2': {
          test: 'edge;tilesetD;2,1',
          layer: '0',
          block: '0'
        },
        '0,3': {
          test: 'edge;tilesetD;2,1',
          layer: '0',
          block: '1'
        }
      }
    },
    sky022: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 73
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    water3: {
      cols: 9,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '8',
          i: 51
        },
        '0,0': {
          r: '8',
          i: 18
        },
        '2,1': {
          r: '8',
          i: 38
        },
        '3,0': {
          r: '8',
          i: 67
        },
        '2,2': {
          r: '8',
          i: 68
        },
        '7,1': {
          r: '8',
          i: 50
        },
        '6,1': {
          r: '8',
          i: 49
        },
        '1,0': {
          r: '8',
          i: 6
        },
        '5,0': {
          r: '8',
          i: 34
        },
        '2,0': {
          r: '8',
          i: 7
        },
        '0,1': {
          r: '8',
          i: 48
        },
        '5,1': {
          r: '8',
          i: 65
        },
        '1,1': {
          r: '8',
          i: 20
        },
        '1,2': {
          r: '8',
          i: 80
        },
        '8,0': {
          r: '8',
          i: 36
        },
        '4,0': {
          r: '8',
          i: 64
        },
        '0,2': {
          r: '8',
          i: 63
        },
        '7,0': {
          r: '8',
          i: 35
        },
        '6,0': {
          r: '8',
          i: 66
        },
        '4,1': {
          r: '8',
          i: 19
        },
        '3,1': {
          r: '8',
          i: 22
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '0,0': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '3,0': {
          block: '0'
        },
        '2,2': {
          block: '0'
        },
        '1,0': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '0,1': {
          block: '0'
        },
        '1,1': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '4,0': {
          block: '0'
        },
        '0,2': {
          block: '0'
        },
        '4,1': {
          block: '0'
        },
        '3,1': {
          block: '0'
        }
      }
    },
    chair0: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 21
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '0.5'
        }
      }
    },
    dstai3: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '8',
          i: 40
        },
        '0,0': {
          r: '8',
          i: 25
        },
        '0,2': {
          r: '8',
          i: 55
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          block: '0',
          layer: '0',
          test: 'edge;tilesetC;0,1'
        },
        '0,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetC;0,1'
        },
        '0,2': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetC;0,1'
        }
      }
    },
    tileset3: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '1',
          i: 240
        },
        '0,0': {
          r: '1',
          i: 407
        },
        '3,2': {
          r: '1',
          i: 342
        },
        '8,2': {
          r: '1',
          i: 261
        },
        '9,0': {
          r: '1',
          i: 292
        },
        '2,2': {
          r: '1',
          i: 423
        },
        '6,1': {
          r: '1',
          i: 184
        },
        '1,0': {
          r: '1',
          i: 186
        },
        '5,0': {
          r: '1',
          i: 212
        },
        '8,3': {
          r: '1',
          i: 276
        },
        '4,2': {
          r: '1',
          i: 341
        },
        '1,1': {
          r: '1',
          i: 180
        },
        '5,3': {
          r: '1',
          i: 213
        },
        '7,1': {
          r: '1',
          i: 241
        },
        '6,0': {
          r: '1',
          i: 169
        },
        '7,3': {
          r: '1',
          i: 275
        },
        '2,1': {
          r: '1',
          i: 171
        },
        '3,1': {
          r: '1',
          i: 430
        },
        '9,3': {
          r: '1',
          i: 277
        },
        '3,0': {
          r: '1',
          i: 415
        },
        '0,1': {
          r: '1',
          i: 170
        },
        '9,1': {
          r: '1',
          i: 307
        },
        '9,2': {
          r: '1',
          i: 262
        },
        '6,3': {
          r: '1',
          i: 182
        },
        '8,0': {
          r: '1',
          i: 242
        },
        '7,2': {
          r: '1',
          i: 260
        },
        '5,1': {
          r: '1',
          i: 244
        },
        '2,0': {
          r: '1',
          i: 408
        },
        '1,2': {
          r: '1',
          i: 185
        },
        '4,0': {
          r: '1',
          i: 416
        },
        '0,2': {
          r: '1',
          i: 422
        },
        '7,0': {
          r: '1',
          i: 243
        },
        '5,2': {
          r: '1',
          i: 259
        },
        '4,1': {
          r: '1',
          i: 431
        },
        '6,2': {
          r: '1',
          i: 211
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '0.5'
        },
        '3,2': {
          block: '0'
        },
        '8,2': {
          block: '0'
        },
        '9,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '0.5'
        },
        '9,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          block: '0',
          layer: '0.5'
        },
        '5,0': {
          block: '0'
        },
        '8,3': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0',
          layer: '1'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '7,3': {
          block: '0'
        },
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '9,3': {
          block: '0'
        },
        '3,0': {
          block: '0',
          layer: '1'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '9,1': {
          block: '0'
        },
        '2,0': {
          block: '0',
          layer: '0.5'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '7,2': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          block: '0',
          layer: '0.5'
        },
        '4,0': {
          block: '0',
          layer: '1'
        },
        '0,2': {
          block: '0',
          layer: '0.5'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '1'
        },
        '3,1': {
          block: '0',
          layer: '1'
        }
      }
    },
    pillar8: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '7',
          i: 288
        },
        '0,0': {
          r: '7',
          i: 256
        },
        '1,0': {
          r: '7',
          i: 258
        },
        '1,1': {
          r: '7',
          i: 319
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        },
        '1,1': {
          s: '1',
          layer: '9'
        }
      }
    },
    tileset0D: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '0',
          i: 303
        },
        '0,0': {
          r: '0',
          i: 60
        },
        '3,2': {
          r: '0',
          i: 291
        },
        '8,2': {
          r: '0',
          i: 283
        },
        '9,0': {
          r: '0',
          i: 293
        },
        '2,2': {
          r: '0',
          i: 92
        },
        '6,1': {
          r: '0',
          i: 301
        },
        '1,0': {
          r: '0',
          i: 61
        },
        '5,0': {
          r: '0',
          i: 286
        },
        '8,3': {
          r: '0',
          i: 307
        },
        '4,2': {
          r: '0',
          i: 292
        },
        '1,1': {
          r: '0',
          i: 76
        },
        '5,3': {
          r: '0',
          i: 304
        },
        '7,1': {
          r: '0',
          i: 302
        },
        '6,0': {
          r: '0',
          i: 300
        },
        '7,3': {
          r: '0',
          i: 306
        },
        '2,1': {
          r: '0',
          i: 77
        },
        '3,1': {
          r: '0',
          i: 62
        },
        '9,3': {
          r: '0',
          i: 309
        },
        '3,0': {
          r: '0',
          i: 92
        },
        '0,1': {
          r: '0',
          i: 75
        },
        '9,1': {
          r: '0',
          i: 308
        },
        '9,2': {
          r: '0',
          i: 294
        },
        '6,3': {
          r: '0',
          i: 305
        },
        '8,0': {
          r: '0',
          i: 288
        },
        '7,2': {
          r: '0',
          i: 282
        },
        '5,1': {
          r: '0',
          i: 285
        },
        '2,0': {
          r: '0',
          i: 62
        },
        '1,2': {
          r: '0',
          i: 91
        },
        '4,0': {
          r: '0',
          i: 90
        },
        '0,2': {
          r: '0',
          i: 90
        },
        '7,0': {
          r: '0',
          i: 287
        },
        '5,2': {
          r: '0',
          i: 289
        },
        '4,1': {
          r: '0',
          i: 60
        },
        '6,2': {
          r: '0',
          i: 290
        }
      },
      instances: [],
      properties: {
        cat: 'tileset',
        flat: '1'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '2,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '3,0': {
          block: '0'
        },
        '0,1': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '4,0': {
          block: '0'
        },
        '0,2': {
          block: '0'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '0'
        },
        '3,1': {
          block: '0'
        }
      }
    },
    rock0: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '4',
          i: 18
        },
        '0,0': {
          r: '4',
          i: 3
        },
        '2,1': {
          r: '4',
          i: 20
        },
        '1,1': {
          r: '4',
          i: 19
        },
        '1,2': {
          r: '4',
          i: 34
        },
        '2,2': {
          r: '4',
          i: 35
        },
        '0,2': {
          r: '4',
          i: 33
        },
        '1,0': {
          r: '4',
          i: 4
        },
        '2,0': {
          r: '4',
          i: 5
        }
      },
      instances: [],
      properties: {},
      tps: {
        '2,2': {
          layer: '3'
        },
        '0,0': {
          layer: '3'
        },
        '2,1': {
          layer: '3'
        },
        '1,1': {
          layer: '3'
        },
        '1,2': {
          layer: '3'
        },
        '0,1': {
          layer: '3'
        },
        '0,2': {
          layer: '3'
        },
        '1,0': {
          layer: '3'
        },
        '2,0': {
          layer: '3'
        }
      }
    },
    sky033: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 79
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    sandbags: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 223
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          leave: '1',
          layer: '1'
        }
      }
    },
    dsta3: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '0',
          i: 178
        },
        '0,0': {
          r: '0',
          i: 163
        },
        '0,2': {
          r: '0',
          i: 193
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          layer: '0.5',
          test: 'edge;tileset1;0,1'
        },
        '0,0': {
          test: 'edge;tileset1;0,1'
        },
        '0,2': {
          test: 'edge;tileset1;0,1'
        }
      }
    },
    water2: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 105
        },
        '2,1': {
          r: '8',
          i: 140
        },
        '3,0': {
          r: '8',
          i: 154
        },
        '0,1': {
          r: '8',
          i: 135
        },
        '1,0': {
          r: '8',
          i: 93
        },
        '2,0': {
          r: '8',
          i: 110
        },
        '2,2': {
          r: '8',
          i: 155
        },
        '1,1': {
          r: '8',
          i: 175
        },
        '1,2': {
          r: '8',
          i: 167
        },
        '4,0': {
          r: '8',
          i: 151
        },
        '0,2': {
          r: '8',
          i: 166
        },
        '4,1': {
          r: '8',
          i: 106
        },
        '3,1': {
          r: '8',
          i: 109
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '0,0': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '3,0': {
          water: '1'
        },
        '2,2': {
          block: '0'
        },
        '1,0': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '0,1': {
          block: '0'
        },
        '1,1': {
          water: '1'
        },
        '1,2': {
          block: '0'
        },
        '4,0': {
          water: '1'
        },
        '0,2': {
          block: '0'
        },
        '4,1': {
          water: '1'
        },
        '3,1': {
          water: '1'
        }
      }
    },
    camp3: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 2
        }
      },
      instances: [],
      properties: {
        tip: 'third',
        cat: 'camp'
      },
      tps: {
        '0,0': {
          camp: '3'
        }
      }
    },
    pillar0a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 267
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    tileset7: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '0',
          i: 168
        },
        '0,0': {
          r: '0',
          i: 139
        },
        '3,2': {
          r: '0',
          i: 251
        },
        '2,2': {
          r: '0',
          i: 171
        },
        '6,1': {
          r: '0',
          i: 166
        },
        '1,0': {
          r: '0',
          i: 140
        },
        '5,0': {
          r: '0',
          i: 151
        },
        '4,2': {
          r: '0',
          i: 252
        },
        '1,1': {
          r: '0',
          i: 87
        },
        '5,3': {
          r: '0',
          i: 264
        },
        '7,1': {
          r: '0',
          i: 167
        },
        '6,0': {
          r: '0',
          i: 165
        },
        '2,1': {
          r: '0',
          i: 156
        },
        '3,0': {
          r: '0',
          i: 236
        },
        '0,1': {
          r: '0',
          i: 154
        },
        '2,0': {
          r: '0',
          i: 141
        },
        '6,3': {
          r: '0',
          i: 265
        },
        '8,0': {
          r: '0',
          i: 153
        },
        '5,1': {
          r: '0',
          i: 150
        },
        '6,2': {
          r: '0',
          i: 250
        },
        '1,2': {
          r: '0',
          i: 170
        },
        '4,0': {
          r: '0',
          i: 235
        },
        '0,2': {
          r: '0',
          i: 169
        },
        '7,0': {
          r: '0',
          i: 152
        },
        '5,2': {
          r: '0',
          i: 249
        },
        '4,1': {
          r: '0',
          i: 237
        },
        '3,1': {
          r: '0',
          i: 234
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '1'
        },
        '3,2': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '1'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          block: '0',
          layer: '1'
        },
        '5,0': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0',
          layer: '1'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '2,1': {
          block: '0',
          layer: '1'
        },
        '3,0': {
          block: '0',
          layer: '1'
        },
        '0,1': {
          block: '0',
          layer: '1'
        },
        '2,0': {
          block: '0',
          layer: '1'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          block: '0',
          layer: '1'
        },
        '4,0': {
          block: '0',
          layer: '1'
        },
        '0,2': {
          block: '0',
          layer: '1'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '1'
        },
        '3,1': {
          block: '0',
          layer: '1'
        }
      }
    },
    wallset1: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '1',
          i: 130
        },
        '0,0': {
          r: '1',
          i: 86
        },
        '2,1': {
          r: '1',
          i: 134
        },
        '3,2': {
          r: '1',
          i: 158
        },
        '3,0': {
          r: '1',
          i: 113
        },
        '1,2': {
          r: '1',
          i: 148
        },
        '2,2': {
          r: '1',
          i: 149
        },
        '4,0': {
          r: '1',
          i: 114
        },
        '0,2': {
          r: '1',
          i: 145
        },
        '1,0': {
          r: '1',
          i: 87
        },
        '2,0': {
          r: '1',
          i: 88
        },
        '3,1': {
          r: '1',
          i: 143
        }
      },
      instances: [],
      properties: {
        dlayer: '4',
        cat: 'wallset'
      },
      tps: {
        '2,2': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        },
        '3,2': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '3,1': {
          s: '1'
        }
      }
    },
    pillar2a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 250
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    house4: {
      cols: 7,
      rows: 4,
      baseLoc: '3,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 8
        },
        '3,3': {
          r: '0',
          i: 56
        },
        '3,2': {
          r: '0',
          i: 41
        },
        '2,2': {
          r: '0',
          i: 40
        },
        '6,1': {
          r: '0',
          i: 29
        },
        '0,2': {
          r: '0',
          i: 38
        },
        '5,0': {
          r: '0',
          i: 13
        },
        '4,2': {
          r: '0',
          i: 42
        },
        '1,1': {
          r: '0',
          i: 24
        },
        '5,3': {
          r: '0',
          i: 58
        },
        '4,3': {
          r: '0',
          i: 57
        },
        '6,0': {
          r: '0',
          i: 14
        },
        '1,3': {
          r: '0',
          i: 54
        },
        '2,1': {
          r: '0',
          i: 25
        },
        '0,3': {
          r: '0',
          i: 53
        },
        '3,0': {
          r: '0',
          i: 11
        },
        '0,1': {
          r: '0',
          i: 23
        },
        '2,0': {
          r: '0',
          i: 10
        },
        '6,3': {
          r: '0',
          i: 59
        },
        '1,0': {
          r: '0',
          i: 9
        },
        '5,1': {
          r: '0',
          i: 28
        },
        '6,2': {
          r: '0',
          i: 44
        },
        '1,2': {
          r: '0',
          i: 39
        },
        '4,0': {
          r: '0',
          i: 12
        },
        '2,3': {
          r: '0',
          i: 55
        },
        '5,2': {
          r: '0',
          i: 43
        },
        '4,1': {
          r: '0',
          i: 27
        },
        '3,1': {
          r: '0',
          i: 26
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '5,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '6,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '5,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '4,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '6,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '6,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '6,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '5,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '5,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        }
      }
    },
    bridge1: {
      cols: 7,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 194
        },
        '2,1': {
          r: '4',
          i: 107
        },
        '3,2': {
          r: '4',
          i: 166
        },
        '5,2': {
          r: '4',
          i: 140
        },
        '3,0': {
          r: '4',
          i: 239
        },
        '0,1': {
          r: '4',
          i: 150
        },
        '4,2': {
          r: '4',
          i: 252
        },
        '1,0': {
          r: '4',
          i: 237
        },
        '5,0': {
          r: '4',
          i: 170
        },
        '2,0': {
          r: '4',
          i: 237
        },
        '6,3': {
          r: '4',
          i: 186
        },
        '2,2': {
          r: '4',
          i: 122
        },
        '5,1': {
          r: '4',
          i: 125
        },
        '1,1': {
          r: '4',
          i: 106
        },
        '5,3': {
          r: '4',
          i: 185
        },
        '0,2': {
          r: '4',
          i: 165
        },
        '6,2': {
          r: '4',
          i: 141
        },
        '1,2': {
          r: '4',
          i: 121
        },
        '4,0': {
          r: '4',
          i: 224
        },
        '4,3': {
          r: '4',
          i: 267
        },
        '6,1': {
          r: '4',
          i: 126
        },
        '6,0': {
          r: '4',
          i: 171
        },
        '4,1': {
          r: '4',
          i: 252
        },
        '3,1': {
          r: '4',
          i: 151
        }
      },
      instances: [],
      properties: {
        size: '1',
        cat: 'bridge'
      },
      tps: {
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '1,1': {
          block: '0',
          layer: '0.5'
        },
        '5,3': {
          block: '0',
          layer: '0.5'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '5,1': {
          block: '0',
          layer: '0.5'
        },
        '5,2': {
          block: '0',
          layer: '0.5'
        },
        '5,0': {
          block: '0',
          layer: '0.5'
        }
      }
    },
    stair0: {
      cols: 2,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 118
        },
        '1,0': {
          r: '0',
          i: 119
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset0;1,0'
        },
        '1,0': {
          layer: '0.5',
          test: 'edge;tileset0;1,0'
        }
      }
    },
    sky043: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 119
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    tileset4: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '5',
          i: 40
        },
        '0,0': {
          r: '5',
          i: 142
        },
        '3,2': {
          r: '5',
          i: 91
        },
        '8,2': {
          r: '5',
          i: 59
        },
        '9,0': {
          r: '5',
          i: 13
        },
        '2,2': {
          r: '5',
          i: 158
        },
        '6,1': {
          r: '5',
          i: 42
        },
        '1,0': {
          r: '5',
          i: 57
        },
        '5,0': {
          r: '5',
          i: 26
        },
        '8,3': {
          r: '5',
          i: 55
        },
        '4,2': {
          r: '5',
          i: 90
        },
        '1,1': {
          r: '5',
          i: 0
        },
        '5,3': {
          r: '5',
          i: 155
        },
        '7,1': {
          r: '5',
          i: 39
        },
        '6,0': {
          r: '5',
          i: 27
        },
        '7,3': {
          r: '5',
          i: 54
        },
        '2,1': {
          r: '5',
          i: 14
        },
        '3,1': {
          r: '5',
          i: 159
        },
        '9,3': {
          r: '5',
          i: 44
        },
        '3,0': {
          r: '5',
          i: 144
        },
        '0,1': {
          r: '5',
          i: 43
        },
        '9,1': {
          r: '5',
          i: 28
        },
        '9,2': {
          r: '5',
          i: 29
        },
        '6,3': {
          r: '5',
          i: 156
        },
        '8,0': {
          r: '5',
          i: 25
        },
        '7,2': {
          r: '5',
          i: 58
        },
        '5,1': {
          r: '5',
          i: 41
        },
        '2,0': {
          r: '5',
          i: 143
        },
        '1,2': {
          r: '5',
          i: 56
        },
        '4,0': {
          r: '5',
          i: 145
        },
        '0,2': {
          r: '5',
          i: 157
        },
        '7,0': {
          r: '5',
          i: 24
        },
        '5,2': {
          r: '5',
          i: 140
        },
        '4,1': {
          r: '5',
          i: 160
        },
        '6,2': {
          r: '5',
          i: 141
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '0.5'
        },
        '3,2': {
          block: '0'
        },
        '8,2': {
          block: '0'
        },
        '9,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '0.5'
        },
        '9,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          block: '0',
          layer: '0.5'
        },
        '5,0': {
          block: '0'
        },
        '8,3': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0',
          layer: '1'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '7,3': {
          block: '0'
        },
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '9,3': {
          block: '0'
        },
        '3,0': {
          block: '0',
          layer: '0.5'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '9,1': {
          block: '0'
        },
        '2,0': {
          block: '0',
          layer: '0.5'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '7,2': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          block: '0',
          layer: '0.5'
        },
        '4,0': {
          block: '0',
          layer: '0.5'
        },
        '0,2': {
          block: '0',
          layer: '0.5'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '0.5'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        }
      }
    },
    tileset8: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '1',
          i: 361
        },
        '0,0': {
          r: '1',
          i: 347
        },
        '3,2': {
          r: '1',
          i: 363
        },
        '2,2': {
          r: '1',
          i: 347
        },
        '6,1': {
          r: '1',
          i: 391
        },
        '1,0': {
          r: '1',
          i: 347
        },
        '5,0': {
          r: '1',
          i: 375
        },
        '4,2': {
          r: '1',
          i: 362
        },
        '1,1': {
          r: '1',
          i: 347
        },
        '5,3': {
          r: '1',
          i: 392
        },
        '7,1': {
          r: '1',
          i: 360
        },
        '6,0': {
          r: '1',
          i: 376
        },
        '2,1': {
          r: '1',
          i: 347
        },
        '3,0': {
          r: '1',
          i: 347
        },
        '0,1': {
          r: '1',
          i: 347
        },
        '2,0': {
          r: '1',
          i: 347
        },
        '6,3': {
          r: '1',
          i: 393
        },
        '8,0': {
          r: '1',
          i: 346
        },
        '5,1': {
          r: '1',
          i: 390
        },
        '6,2': {
          r: '1',
          i: 378
        },
        '1,2': {
          r: '1',
          i: 347
        },
        '4,0': {
          r: '1',
          i: 347
        },
        '0,2': {
          r: '1',
          i: 347
        },
        '7,0': {
          r: '1',
          i: 345
        },
        '5,2': {
          r: '1',
          i: 377
        },
        '4,1': {
          r: '1',
          i: 347
        },
        '3,1': {
          r: '1',
          i: 347
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '2,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0',
          layer: '0'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '3,0': {
          block: '0'
        },
        '0,1': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '4,0': {
          block: '0'
        },
        '0,2': {
          block: '0'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '0'
        },
        '3,1': {
          block: '0'
        }
      }
    },
    sky031: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '2',
          i: 21
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    table4: {
      cols: 5,
      rows: 3,
      baseLoc: '4,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 112
        },
        '3,0': {
          r: '6',
          i: 28
        },
        '4,0': {
          r: '6',
          i: 113
        },
        '4,2': {
          r: '6',
          i: 72
        },
        '1,0': {
          r: '6',
          i: 13
        },
        '4,1': {
          r: '6',
          i: 42
        },
        '2,0': {
          r: '6',
          i: 28
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        },
        '3,0': {
          layer: '1'
        },
        '4,0': {
          layer: '1'
        },
        '4,2': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '4,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        }
      }
    },
    sky023: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 82
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    sky049: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 42
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    table05: {
      cols: 8,
      rows: 8,
      baseLoc: '3,3',
      origin: '0,0',
      tiles: {
        '5,7': {
          r: '6',
          i: 38
        },
        '5,4': {
          r: '6',
          i: 23
        },
        '2,2': {
          r: '6',
          i: 23
        },
        '4,2': {
          r: '6',
          i: 23
        },
        '1,0': {
          r: '6',
          i: 8
        },
        '0,4': {
          r: '6',
          i: 22
        },
        '4,4': {
          r: '6',
          i: 23
        },
        '1,5': {
          r: '6',
          i: 23
        },
        '1,1': {
          r: '6',
          i: 23
        },
        '7,1': {
          r: '6',
          i: 24
        },
        '3,6': {
          r: '6',
          i: 23
        },
        '3,5': {
          r: '6',
          i: 23
        },
        '1,3': {
          r: '6',
          i: 23
        },
        '2,1': {
          r: '6',
          i: 23
        },
        '2,7': {
          r: '6',
          i: 38
        },
        '2,3': {
          r: '6',
          i: 23
        },
        '5,5': {
          r: '6',
          i: 23
        },
        '3,0': {
          r: '6',
          i: 8
        },
        '4,5': {
          r: '6',
          i: 23
        },
        '0,7': {
          r: '6',
          i: 37
        },
        '6,2': {
          r: '6',
          i: 23
        },
        '6,3': {
          r: '6',
          i: 23
        },
        '0,5': {
          r: '6',
          i: 22
        },
        '0,3': {
          r: '6',
          i: 22
        },
        '3,4': {
          r: '6',
          i: 23
        },
        '7,4': {
          r: '6',
          i: 24
        },
        '7,3': {
          r: '6',
          i: 24
        },
        '4,0': {
          r: '6',
          i: 8
        },
        '7,0': {
          r: '6',
          i: 9
        },
        '4,1': {
          r: '6',
          i: 23
        },
        '6,6': {
          r: '6',
          i: 23
        },
        '3,1': {
          r: '6',
          i: 23
        },
        '2,6': {
          r: '6',
          i: 23
        },
        '0,0': {
          r: '6',
          i: 7
        },
        '3,3': {
          r: '6',
          i: 23
        },
        '3,2': {
          r: '6',
          i: 23
        },
        '1,6': {
          r: '6',
          i: 23
        },
        '6,1': {
          r: '6',
          i: 23
        },
        '5,0': {
          r: '6',
          i: 8
        },
        '7,5': {
          r: '6',
          i: 24
        },
        '5,3': {
          r: '6',
          i: 23
        },
        '6,7': {
          r: '6',
          i: 38
        },
        '2,5': {
          r: '6',
          i: 23
        },
        '6,0': {
          r: '6',
          i: 8
        },
        '7,6': {
          r: '6',
          i: 24
        },
        '1,7': {
          r: '6',
          i: 38
        },
        '4,3': {
          r: '6',
          i: 23
        },
        '2,4': {
          r: '6',
          i: 23
        },
        '4,7': {
          r: '6',
          i: 38
        },
        '7,7': {
          r: '6',
          i: 39
        },
        '6,4': {
          r: '6',
          i: 23
        },
        '0,6': {
          r: '6',
          i: 22
        },
        '4,6': {
          r: '6',
          i: 23
        },
        '2,0': {
          r: '6',
          i: 8
        },
        '1,4': {
          r: '6',
          i: 23
        },
        '0,1': {
          r: '6',
          i: 22
        },
        '7,2': {
          r: '6',
          i: 24
        },
        '5,1': {
          r: '6',
          i: 23
        },
        '1,2': {
          r: '6',
          i: 23
        },
        '5,6': {
          r: '6',
          i: 23
        },
        '6,5': {
          r: '6',
          i: 23
        },
        '0,2': {
          r: '6',
          i: 22
        },
        '5,2': {
          r: '6',
          i: 23
        },
        '3,7': {
          r: '6',
          i: 38
        }
      },
      instances: [],
      properties: {
        dlayer: '1'
      },
      tps: {
        '0,2': {
          layer: '1'
        },
        '5,4': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '4,2': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '0,4': {
          layer: '1'
        },
        '4,4': {
          layer: '1'
        },
        '1,5': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '7,1': {
          layer: '1'
        },
        '0,7': {
          layer: '1'
        },
        '3,5': {
          layer: '1'
        },
        '1,3': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '0,3': {
          layer: '1'
        },
        '5,5': {
          layer: '1'
        },
        '3,0': {
          layer: '1'
        },
        '4,5': {
          layer: '1'
        },
        '2,7': {
          layer: '1'
        },
        '6,2': {
          layer: '1'
        },
        '2,6': {
          layer: '1'
        },
        '0,5': {
          layer: '1'
        },
        '3,6': {
          layer: '1'
        },
        '3,4': {
          layer: '1'
        },
        '3,1': {
          layer: '1'
        },
        '7,3': {
          layer: '1'
        },
        '4,0': {
          layer: '1'
        },
        '7,0': {
          layer: '1'
        },
        '4,1': {
          layer: '1'
        },
        '6,6': {
          layer: '1'
        },
        '6,3': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '3,3': {
          layer: '1'
        },
        '3,2': {
          layer: '1'
        },
        '7,7': {
          layer: '1'
        },
        '1,6': {
          layer: '1'
        },
        '6,1': {
          layer: '1'
        },
        '5,0': {
          layer: '1'
        },
        '2,5': {
          layer: '1'
        },
        '5,3': {
          layer: '1'
        },
        '7,4': {
          layer: '1'
        },
        '6,7': {
          layer: '1'
        },
        '4,3': {
          layer: '1'
        },
        '2,4': {
          layer: '1'
        },
        '7,6': {
          layer: '1'
        },
        '1,7': {
          layer: '1'
        },
        '7,5': {
          layer: '1'
        },
        '6,0': {
          layer: '1'
        },
        '4,7': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '6,4': {
          layer: '1'
        },
        '0,6': {
          layer: '1'
        },
        '4,6': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '1,4': {
          layer: '1'
        },
        '5,6': {
          layer: '1'
        },
        '7,2': {
          layer: '1'
        },
        '5,1': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '5,7': {
          layer: '1'
        },
        '6,5': {
          layer: '1'
        },
        '2,3': {
          layer: '1'
        },
        '5,2': {
          layer: '1'
        },
        '3,7': {
          layer: '1'
        }
      }
    },
    tilesetA: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '1',
          i: 299
        },
        '0,0': {
          r: '1',
          i: 3
        },
        '3,2': {
          r: '1',
          i: 299
        },
        '2,2': {
          r: '1',
          i: 19
        },
        '6,1': {
          r: '1',
          i: 299
        },
        '1,0': {
          r: '1',
          i: 7
        },
        '5,0': {
          r: '1',
          i: 299
        },
        '4,2': {
          r: '1',
          i: 299
        },
        '1,1': {
          r: '1',
          i: 299
        },
        '5,3': {
          r: '1',
          i: 299
        },
        '7,1': {
          r: '1',
          i: 299
        },
        '6,0': {
          r: '1',
          i: 299
        },
        '2,1': {
          r: '1',
          i: 64
        },
        '3,0': {
          r: '1',
          i: 49
        },
        '0,1': {
          r: '1',
          i: 63
        },
        '2,0': {
          r: '1',
          i: 4
        },
        '6,3': {
          r: '1',
          i: 299
        },
        '8,0': {
          r: '1',
          i: 299
        },
        '5,1': {
          r: '1',
          i: 299
        },
        '6,2': {
          r: '1',
          i: 299
        },
        '1,2': {
          r: '1',
          i: 78
        },
        '4,0': {
          r: '1',
          i: 48
        },
        '0,2': {
          r: '1',
          i: 18
        },
        '7,0': {
          r: '1',
          i: 299
        },
        '5,2': {
          r: '1',
          i: 299
        },
        '4,1': {
          r: '1',
          i: 33
        },
        '3,1': {
          r: '1',
          i: 34
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '6'
        },
        '3,2': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '6'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          s: '1',
          block: '0',
          layer: '6'
        },
        '5,0': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0',
          layer: '6'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '2,1': {
          s: '1',
          block: '0',
          layer: '6'
        },
        '3,0': {
          block: '0',
          layer: '6'
        },
        '0,1': {
          s: '1',
          block: '0',
          layer: '6'
        },
        '2,0': {
          block: '0',
          layer: '6'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          s: '1',
          block: '0',
          layer: '6'
        },
        '4,0': {
          block: '0',
          layer: '6'
        },
        '0,2': {
          block: '0',
          layer: '6'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '6'
        },
        '3,1': {
          block: '0',
          layer: '6'
        }
      }
    },
    carpet1: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '1',
          i: 310
        },
        '0,0': {
          r: '1',
          i: 411
        },
        '3,2': {
          r: '1',
          i: 385
        },
        '8,2': {
          r: '1',
          i: 331
        },
        '9,0': {
          r: '1',
          i: 272
        },
        '2,2': {
          r: '1',
          i: 427
        },
        '6,1': {
          r: '1',
          i: 311
        },
        '1,0': {
          r: '1',
          i: 322
        },
        '5,0': {
          r: '1',
          i: 308
        },
        '8,3': {
          r: '1',
          i: 303
        },
        '4,2': {
          r: '1',
          i: 400
        },
        '1,1': {
          r: '1',
          i: 339
        },
        '5,3': {
          r: '1',
          i: 371
        },
        '7,1': {
          r: '1',
          i: 312
        },
        '6,0': {
          r: '1',
          i: 324
        },
        '7,3': {
          r: '1',
          i: 302
        },
        '2,1': {
          r: '1',
          i: 282
        },
        '3,1': {
          r: '1',
          i: 448
        },
        '9,3': {
          r: '1',
          i: 270
        },
        '3,0': {
          r: '1',
          i: 419
        },
        '0,1': {
          r: '1',
          i: 281
        },
        '9,1': {
          r: '1',
          i: 287
        },
        '9,2': {
          r: '1',
          i: 255
        },
        '6,3': {
          r: '1',
          i: 372
        },
        '8,0': {
          r: '1',
          i: 325
        },
        '7,2': {
          r: '1',
          i: 330
        },
        '5,1': {
          r: '1',
          i: 313
        },
        '2,0': {
          r: '1',
          i: 412
        },
        '1,2': {
          r: '1',
          i: 337
        },
        '4,0': {
          r: '1',
          i: 434
        },
        '0,2': {
          r: '1',
          i: 426
        },
        '7,0': {
          r: '1',
          i: 309
        },
        '5,2': {
          r: '1',
          i: 356
        },
        '4,1': {
          r: '1',
          i: 449
        },
        '6,2': {
          r: '1',
          i: 357
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '0.5'
        },
        '3,2': {
          block: '0'
        },
        '8,2': {
          block: '0'
        },
        '9,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '0.5'
        },
        '9,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          block: '0',
          layer: '0.5'
        },
        '5,0': {
          block: '0'
        },
        '8,3': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0',
          layer: '1'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '7,3': {
          block: '0'
        },
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '9,3': {
          block: '0'
        },
        '3,0': {
          block: '0',
          layer: '0.5'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '9,1': {
          block: '0'
        },
        '2,0': {
          block: '0',
          layer: '0.5'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '7,2': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          block: '0',
          layer: '0.5'
        },
        '4,0': {
          block: '0',
          layer: '0.5'
        },
        '0,2': {
          block: '0',
          layer: '0.5'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '0.5'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        }
      }
    },
    sky042: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 89
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    lib_moveable_1: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '4',
          i: 315
        },
        '0,0': {
          r: '4',
          i: 300
        },
        '1,0': {
          r: '4',
          i: 301
        },
        '1,1': {
          r: '4',
          i: 316
        }
      },
      instances: [],
      properties: {
        dlayer: '1.5',
        cat: 'device',
        device: 'block'
      },
      tps: {}
    },
    water: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '2',
          i: 0
        },
        '2,1': {
          r: '2',
          i: 17
        },
        '3,0': {
          r: '2',
          i: 3
        },
        '0,1': {
          r: '2',
          i: 15
        },
        '1,0': {
          r: '2',
          i: 1
        },
        '2,0': {
          r: '2',
          i: 2
        },
        '2,2': {
          r: '2',
          i: 32
        },
        '1,1': {
          r: '2',
          i: 16
        },
        '1,2': {
          r: '2',
          i: 31
        },
        '4,0': {
          r: '2',
          i: 4
        },
        '0,2': {
          r: '2',
          i: 30
        },
        '4,1': {
          r: '2',
          i: 19
        },
        '3,1': {
          r: '2',
          i: 18
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '0,0': {
          water: '1'
        },
        '2,1': {
          water: '1'
        },
        '3,0': {
          water: '1'
        },
        '2,2': {
          water: '1'
        },
        '1,0': {
          water: '1'
        },
        '2,0': {
          water: '1'
        },
        '0,1': {
          water: '1'
        },
        '1,1': {
          water: '1'
        },
        '1,2': {
          water: '1'
        },
        '4,0': {
          water: '1'
        },
        '0,2': {
          water: '1'
        },
        '4,1': {
          water: '1'
        },
        '3,1': {
          water: '1'
        }
      }
    },
    sky002: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 250
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    tileset9: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '1',
          i: 121
        },
        '0,0': {
          r: '1',
          i: 349
        },
        '3,2': {
          r: '1',
          i: 344
        },
        '2,2': {
          r: '1',
          i: 365
        },
        '6,1': {
          r: '1',
          i: 151
        },
        '1,0': {
          r: '1',
          i: 395
        },
        '5,0': {
          r: '1',
          i: 135
        },
        '4,2': {
          r: '1',
          i: 343
        },
        '1,1': {
          r: '1',
          i: 156
        },
        '5,3': {
          r: '1',
          i: 373
        },
        '7,1': {
          r: '1',
          i: 120
        },
        '6,0': {
          r: '1',
          i: 136
        },
        '2,1': {
          r: '1',
          i: 380
        },
        '3,0': {
          r: '1',
          i: 367
        },
        '0,1': {
          r: '1',
          i: 379
        },
        '2,0': {
          r: '1',
          i: 350
        },
        '6,3': {
          r: '1',
          i: 374
        },
        '8,0': {
          r: '1',
          i: 106
        },
        '5,1': {
          r: '1',
          i: 150
        },
        '6,2': {
          r: '1',
          i: 359
        },
        '1,2': {
          r: '1',
          i: 394
        },
        '4,0': {
          r: '1',
          i: 366
        },
        '0,2': {
          r: '1',
          i: 364
        },
        '7,0': {
          r: '1',
          i: 105
        },
        '5,2': {
          r: '1',
          i: 358
        },
        '4,1': {
          r: '1',
          i: 351
        },
        '3,1': {
          r: '1',
          i: 352
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '1'
        },
        '3,2': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '1'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          s: '1',
          block: '0',
          layer: '1'
        },
        '5,0': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0',
          layer: '1'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '2,1': {
          s: '1',
          block: '0',
          layer: '1'
        },
        '3,0': {
          block: '0',
          layer: '1'
        },
        '0,1': {
          s: '1',
          block: '0',
          layer: '1'
        },
        '2,0': {
          block: '0',
          layer: '1'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          s: '1',
          block: '0',
          layer: '1'
        },
        '4,0': {
          block: '0',
          layer: '1'
        },
        '0,2': {
          block: '0',
          layer: '1'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '1'
        },
        '3,1': {
          block: '0',
          layer: '1'
        }
      }
    },
    sky040: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 72
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    house6: {
      cols: 6,
      rows: 4,
      baseLoc: '2,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 8
        },
        '2,1': {
          r: '0',
          i: 25
        },
        '0,3': {
          r: '0',
          i: 53
        },
        '1,3': {
          r: '0',
          i: 54
        },
        '3,0': {
          r: '0',
          i: 12
        },
        '0,1': {
          r: '0',
          i: 23
        },
        '3,3': {
          r: '0',
          i: 57
        },
        '1,0': {
          r: '0',
          i: 9
        },
        '5,0': {
          r: '0',
          i: 14
        },
        '2,0': {
          r: '0',
          i: 10
        },
        '2,2': {
          r: '0',
          i: 40
        },
        '2,3': {
          r: '0',
          i: 55
        },
        '1,1': {
          r: '0',
          i: 24
        },
        '5,3': {
          r: '0',
          i: 59
        },
        '0,2': {
          r: '0',
          i: 38
        },
        '1,2': {
          r: '0',
          i: 39
        },
        '5,1': {
          r: '0',
          i: 29
        },
        '4,0': {
          r: '0',
          i: 13
        },
        '4,3': {
          r: '0',
          i: 58
        },
        '4,2': {
          r: '0',
          i: 43
        },
        '5,2': {
          r: '0',
          i: 44
        },
        '4,1': {
          r: '0',
          i: 28
        },
        '3,2': {
          r: '0',
          i: 42
        },
        '3,1': {
          r: '0',
          i: 27
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '5,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '5,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '5,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '4,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '4,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '5,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        }
      }
    },
    wallset0: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '0',
          i: 120
        },
        '0,0': {
          r: '0',
          i: 109
        },
        '2,1': {
          r: '0',
          i: 123
        },
        '3,2': {
          r: '0',
          i: 194
        },
        '3,0': {
          r: '0',
          i: 194
        },
        '1,2': {
          r: '0',
          i: 136
        },
        '2,2': {
          r: '0',
          i: 126
        },
        '4,0': {
          r: '0',
          i: 194
        },
        '0,2': {
          r: '0',
          i: 135
        },
        '1,0': {
          r: '0',
          i: 107
        },
        '2,0': {
          r: '0',
          i: 108
        },
        '3,1': {
          r: '0',
          i: 194
        }
      },
      instances: [],
      properties: {
        dlayer: '3',
        cat: 'wallset'
      },
      tps: {
        '2,2': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        },
        '3,2': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '3,1': {
          s: '1'
        }
      }
    },
    sky032: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 194
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    dstai0: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 71
        },
        '2,0': {
          r: '8',
          i: 73
        },
        '1,0': {
          r: '8',
          i: 72
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'edge;tilesetC;1,2',
          block: '1'
        },
        '2,0': {
          test: 'edge;tilesetC;1,2',
          block: '1'
        },
        '1,0': {
          test: 'edge;tilesetC;1,2',
          layer: '0',
          block: '0'
        }
      }
    },
    house9: {
      cols: 4,
      rows: 5,
      baseLoc: '1,2',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 67
        },
        '2,1': {
          r: '5',
          i: 84
        },
        '0,3': {
          r: '5',
          i: 112
        },
        '3,0': {
          r: '5',
          i: 70
        },
        '1,4': {
          r: '5',
          i: 128
        },
        '2,2': {
          r: '5',
          i: 99
        },
        '3,3': {
          r: '5',
          i: 115
        },
        '1,0': {
          r: '5',
          i: 68
        },
        '0,4': {
          r: '5',
          i: 127
        },
        '2,0': {
          r: '5',
          i: 69
        },
        '0,1': {
          r: '5',
          i: 82
        },
        '2,3': {
          r: '5',
          i: 114
        },
        '1,1': {
          r: '5',
          i: 83
        },
        '3,2': {
          r: '5',
          i: 100
        },
        '3,4': {
          r: '5',
          i: 130
        },
        '1,2': {
          r: '5',
          i: 98
        },
        '0,2': {
          r: '5',
          i: 97
        },
        '2,4': {
          r: '5',
          i: 129
        },
        '1,3': {
          r: '5',
          i: 113
        },
        '3,1': {
          r: '5',
          i: 85
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '1,4': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '0,4': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '3,4': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,4': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        }
      }
    },
    tileset8D1: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '1',
          i: 453
        },
        '0,0': {
          r: '1',
          i: 107
        },
        '3,2': {
          r: '1',
          i: 440
        },
        '8,2': {
          r: '1',
          i: 468
        },
        '9,0': {
          r: '1',
          i: 439
        },
        '2,2': {
          r: '1',
          i: 141
        },
        '6,1': {
          r: '1',
          i: 451
        },
        '1,0': {
          r: '1',
          i: 94
        },
        '5,0': {
          r: '1',
          i: 435
        },
        '8,3': {
          r: '1',
          i: 483
        },
        '4,2': {
          r: '1',
          i: 441
        },
        '1,1': {
          r: '1',
          i: 139
        },
        '5,3': {
          r: '1',
          i: 480
        },
        '7,1': {
          r: '1',
          i: 452
        },
        '6,0': {
          r: '1',
          i: 436
        },
        '7,3': {
          r: '1',
          i: 482
        },
        '2,1': {
          r: '1',
          i: 126
        },
        '3,1': {
          r: '1',
          i: 110
        },
        '9,3': {
          r: '1',
          i: 484
        },
        '3,0': {
          r: '1',
          i: 140
        },
        '0,1': {
          r: '1',
          i: 122
        },
        '9,1': {
          r: '1',
          i: 454
        },
        '9,2': {
          r: '1',
          i: 469
        },
        '6,3': {
          r: '1',
          i: 481
        },
        '8,0': {
          r: '1',
          i: 438
        },
        '7,2': {
          r: '1',
          i: 467
        },
        '5,1': {
          r: '1',
          i: 450
        },
        '2,0': {
          r: '1',
          i: 111
        },
        '1,2': {
          r: '1',
          i: 154
        },
        '4,0': {
          r: '1',
          i: 138
        },
        '0,2': {
          r: '1',
          i: 137
        },
        '7,0': {
          r: '1',
          i: 437
        },
        '5,2': {
          r: '1',
          i: 465
        },
        '4,1': {
          r: '1',
          i: 108
        },
        '6,2': {
          r: '1',
          i: 466
        }
      },
      instances: [],
      properties: {
        cat: 'tileset',
        flat: '1'
      },
      tps: {
        '0,0': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '3,0': {
          block: '0'
        },
        '2,2': {
          block: '0'
        },
        '1,0': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '0,1': {
          block: '0'
        },
        '1,1': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '4,0': {
          block: '0'
        },
        '0,2': {
          block: '0'
        },
        '4,1': {
          block: '0'
        },
        '3,1': {
          block: '0'
        }
      }
    },
    dstai1: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 11
        },
        '2,0': {
          r: '8',
          i: 13
        },
        '1,0': {
          r: '8',
          i: 12
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0',
          test: 'edge;tilesetC;1,0',
          block: '1'
        },
        '2,0': {
          layer: '0',
          test: 'edge;tilesetC;1,0',
          block: '1'
        },
        '1,0': {
          layer: '0',
          test: 'edge;tilesetC;1,0',
          block: '0'
        }
      }
    },
    sky013: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 16
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    decobj5: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 220
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        }
      }
    },
    tileset0: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '0',
          i: 168
        },
        '0,0': {
          r: '0',
          i: 71
        },
        '3,2': {
          r: '0',
          i: 251
        },
        '2,2': {
          r: '0',
          i: 103
        },
        '6,1': {
          r: '0',
          i: 166
        },
        '1,0': {
          r: '0',
          i: 72
        },
        '5,0': {
          r: '0',
          i: 151
        },
        '4,2': {
          r: '0',
          i: 252
        },
        '1,1': {
          r: '0',
          i: 87
        },
        '5,3': {
          r: '0',
          i: 264
        },
        '7,1': {
          r: '0',
          i: 167
        },
        '6,0': {
          r: '0',
          i: 165
        },
        '2,1': {
          r: '0',
          i: 88
        },
        '3,0': {
          r: '0',
          i: 116
        },
        '0,1': {
          r: '0',
          i: 86
        },
        '2,0': {
          r: '0',
          i: 73
        },
        '6,3': {
          r: '0',
          i: 265
        },
        '8,0': {
          r: '0',
          i: 153
        },
        '5,1': {
          r: '0',
          i: 150
        },
        '6,2': {
          r: '0',
          i: 250
        },
        '1,2': {
          r: '0',
          i: 102
        },
        '4,0': {
          r: '0',
          i: 117
        },
        '0,2': {
          r: '0',
          i: 101
        },
        '7,0': {
          r: '0',
          i: 152
        },
        '5,2': {
          r: '0',
          i: 249
        },
        '4,1': {
          r: '0',
          i: 132
        },
        '3,1': {
          r: '0',
          i: 131
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '2,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0',
          layer: '1'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '3,0': {
          block: '0'
        },
        '0,1': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '4,0': {
          block: '0'
        },
        '0,2': {
          block: '0'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '0'
        },
        '3,1': {
          block: '0'
        }
      }
    },
    rock2: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '4',
          i: 285
        },
        '0,0': {
          r: '4',
          i: 270
        },
        '1,0': {
          r: '4',
          i: 271
        },
        '1,1': {
          r: '4',
          i: 286
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          layer: '2'
        },
        '0,0': {
          layer: '2'
        },
        '1,0': {
          layer: '2'
        },
        '1,1': {
          layer: '2'
        }
      }
    },
    dstai2: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '8',
          i: 44
        },
        '0,0': {
          r: '8',
          i: 29
        },
        '0,2': {
          r: '8',
          i: 59
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          test: 'edge;tilesetC;2,1',
          block: '0',
          layer: '0'
        },
        '0,0': {
          test: 'edge;tilesetC;2,1',
          block: '1',
          layer: '0'
        },
        '0,2': {
          block: '1',
          test: 'edge;tilesetC;2,1',
          layer: '0'
        }
      }
    },
    dstd0: {
      cols: 3,
      rows: 2,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '0',
          i: 270
        },
        '0,0': {
          r: '0',
          i: 271
        },
        '2,1': {
          r: '0',
          i: 273
        },
        '1,0': {
          r: '0',
          i: 63
        },
        '1,1': {
          r: '0',
          i: 63
        },
        '2,0': {
          r: '0',
          i: 272
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          test: 'edge;tileset7;1,0'
        },
        '0,0': {
          test: 'flat'
        },
        '2,1': {
          test: 'edge;tileset7;1,0'
        },
        '1,0': {
          layer: '0.5',
          test: 'flat'
        },
        '1,1': {
          test: 'edge;tileset7;1,0'
        },
        '2,0': {
          test: 'flat'
        }
      }
    },
    shine1_n: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 334
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    tree2: {
      cols: 5,
      rows: 5,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 40
        },
        '2,1': {
          r: '4',
          i: 57
        },
        '0,3': {
          r: '4',
          i: 85
        },
        '1,3': {
          r: '4',
          i: 86
        },
        '3,0': {
          r: '4',
          i: 43
        },
        '1,4': {
          r: '4',
          i: 101
        },
        '0,1': {
          r: '4',
          i: 55
        },
        '3,3': {
          r: '4',
          i: 88
        },
        '1,0': {
          r: '4',
          i: 41
        },
        '0,4': {
          r: '4',
          i: 100
        },
        '4,4': {
          r: '4',
          i: 104
        },
        '2,2': {
          r: '4',
          i: 72
        },
        '2,3': {
          r: '4',
          i: 87
        },
        '1,1': {
          r: '4',
          i: 56
        },
        '3,2': {
          r: '4',
          i: 73
        },
        '0,2': {
          r: '4',
          i: 70
        },
        '2,0': {
          r: '4',
          i: 42
        },
        '1,2': {
          r: '4',
          i: 71
        },
        '4,0': {
          r: '4',
          i: 44
        },
        '4,3': {
          r: '4',
          i: 89
        },
        '4,2': {
          r: '4',
          i: 74
        },
        '2,4': {
          r: '4',
          i: 102
        },
        '4,1': {
          r: '4',
          i: 59
        },
        '3,4': {
          r: '4',
          i: 103
        },
        '3,1': {
          r: '4',
          i: 58
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '2,2': {
          layer: '5'
        }
      }
    },
    bridge6: {
      cols: 9,
      rows: 5,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '5',
          i: 41
        },
        '0,0': {
          r: '5',
          i: 19
        },
        '3,3': {
          r: '5',
          i: 29
        },
        '3,2': {
          r: '5',
          i: 49
        },
        '8,2': {
          r: '5',
          i: 41
        },
        '2,2': {
          r: '4',
          i: 388
        },
        '6,1': {
          r: '4',
          i: 397
        },
        '1,0': {
          r: '4',
          i: 389
        },
        '0,4': {
          r: '5',
          i: 28
        },
        '8,3': {
          r: '5',
          i: 55
        },
        '4,2': {
          r: '4',
          i: 396
        },
        '1,1': {
          r: '5',
          i: 0
        },
        '5,3': {
          r: '5',
          i: 57
        },
        '5,0': {
          r: '5',
          i: 57
        },
        '7,1': {
          r: '5',
          i: 27
        },
        '4,3': {
          r: '5',
          i: 48
        },
        '6,0': {
          r: '5',
          i: 34
        },
        '7,3': {
          r: '5',
          i: 54
        },
        '0,2': {
          r: '5',
          i: 48
        },
        '2,1': {
          r: '5',
          i: 0
        },
        '0,3': {
          r: '5',
          i: 13
        },
        '2,4': {
          r: '5',
          i: 26
        },
        '1,3': {
          r: '5',
          i: 42
        },
        '3,0': {
          r: '5',
          i: 34
        },
        '1,4': {
          r: '5',
          i: 26
        },
        '0,1': {
          r: '5',
          i: 43
        },
        '6,2': {
          r: '4',
          i: 397
        },
        '6,3': {
          r: '5',
          i: 49
        },
        '8,0': {
          r: '5',
          i: 59
        },
        '7,2': {
          r: '5',
          i: 27
        },
        '5,1': {
          r: '5',
          i: 0
        },
        '2,0': {
          r: '4',
          i: 389
        },
        '1,2': {
          r: '4',
          i: 388
        },
        '4,0': {
          r: '5',
          i: 19
        },
        '2,3': {
          r: '5',
          i: 42
        },
        '7,0': {
          r: '5',
          i: 58
        },
        '5,2': {
          r: '5',
          i: 0
        },
        '4,1': {
          r: '4',
          i: 396
        },
        '3,4': {
          r: '5',
          i: 44
        },
        '3,1': {
          r: '5',
          i: 14
        }
      },
      instances: [],
      properties: {
        size: '2',
        cat: 'bridge'
      },
      tps: {
        '2,1': {
          layer: '1',
          block: '0'
        },
        '1,1': {
          layer: '1',
          block: '0'
        },
        '5,3': {
          block: '0',
          layer: '0.5'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '5,1': {
          layer: '1',
          block: '0'
        },
        '5,2': {
          layer: '1',
          block: '0'
        },
        '5,0': {
          block: '0',
          layer: '0.5'
        }
      }
    },
    dste3: {
      cols: 2,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 278
        },
        '1,1': {
          r: '0',
          i: 63
        },
        '1,2': {
          r: '0',
          i: 63
        },
        '0,1': {
          r: '0',
          i: 63
        },
        '0,2': {
          r: '0',
          i: 63
        },
        '0,3': {
          r: '0',
          i: 280
        },
        '1,0': {
          r: '0',
          i: 279
        },
        '1,3': {
          r: '0',
          i: 281
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'edge;tileset7;2,1'
        },
        '0,3': {
          test: 'edge;tileset7;2,1'
        },
        '1,1': {
          layer: '0.5',
          test: 'flat'
        },
        '1,2': {
          layer: '0.5',
          test: 'flat'
        },
        '0,1': {
          test: 'edge;tileset7;2,1'
        },
        '0,2': {
          test: 'edge;tileset7;2,1'
        },
        '1,0': {
          test: 'flat'
        },
        '1,3': {
          test: 'flat'
        }
      }
    },
    dstai1a: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 86
        },
        '2,0': {
          r: '8',
          i: 88
        },
        '1,0': {
          r: '8',
          i: 87
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0',
          test: 'edge;tilesetD;1,0',
          block: '1'
        },
        '2,0': {
          layer: '0',
          test: 'edge;tilesetD;1,0',
          block: '1'
        },
        '1,0': {
          layer: '0',
          test: 'edge;tilesetD;1,0',
          block: '0'
        }
      }
    },
    sky008: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 321
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    flag: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 5
        }
      },
      instances: [],
      properties: {
        cat: 'invisible'
      },
      tps: {}
    },
    house2: {
      cols: 4,
      rows: 4,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 199
        },
        '2,1': {
          r: '4',
          i: 217
        },
        '0,3': {
          r: '4',
          i: 244
        },
        '3,0': {
          r: '4',
          i: 203
        },
        '0,1': {
          r: '4',
          i: 214
        },
        '3,3': {
          r: '4',
          i: 248
        },
        '3,2': {
          r: '4',
          i: 233
        },
        '2,0': {
          r: '4',
          i: 202
        },
        '2,2': {
          r: '4',
          i: 232
        },
        '2,3': {
          r: '4',
          i: 247
        },
        '1,1': {
          r: '4',
          i: 215
        },
        '1,2': {
          r: '4',
          i: 230
        },
        '0,2': {
          r: '4',
          i: 229
        },
        '1,0': {
          r: '4',
          i: 200
        },
        '1,3': {
          r: '4',
          i: 245
        },
        '3,1': {
          r: '4',
          i: 218
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        }
      }
    },
    tree7: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '4',
          i: 167
        },
        '0,0': {
          r: '4',
          i: 152
        },
        '2,1': {
          r: '4',
          i: 169
        },
        '1,1': {
          r: '4',
          i: 168
        },
        '1,2': {
          r: '4',
          i: 183
        },
        '2,2': {
          r: '4',
          i: 184
        },
        '0,2': {
          r: '4',
          i: 182
        },
        '1,0': {
          r: '4',
          i: 153
        },
        '2,0': {
          r: '4',
          i: 154
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '1,1': {
          layer: '3'
        }
      }
    },
    pillar1a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 336
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    shine2_s: {
      cols: 1,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '4',
          i: 350
        },
        '0,0': {
          r: '4',
          i: 335
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    dstai2a: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '8',
          i: 119
        },
        '0,0': {
          r: '8',
          i: 104
        },
        '0,2': {
          r: '8',
          i: 134
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          block: '0',
          layer: '0',
          test: 'edge;tilesetD;2,1'
        },
        '0,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetD;2,1'
        },
        '0,2': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetD;2,1'
        }
      }
    },
    warp: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 34
        }
      },
      instances: [],
      properties: {
        cat: 'device',
        device: 'warp',
        prop: '1'
      },
      tps: {}
    },
    shadow2_e: {
      cols: 2,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 93
        },
        '1,0': {
          r: '4',
          i: 94
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    decobj1: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 216
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        }
      }
    },
    decobj6: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 221
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '0.5'
        }
      }
    },
    shadow1_n: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 68
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    chair1: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 6
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '0.5'
        }
      }
    },
    sky048: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 20
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    wallset5: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '5',
          i: 80
        },
        '0,0': {
          r: '5',
          i: 110
        },
        '2,1': {
          r: '5',
          i: 80
        },
        '3,2': {
          r: '5',
          i: 79
        },
        '3,0': {
          r: '5',
          i: 79
        },
        '1,2': {
          r: '5',
          i: 81
        },
        '2,2': {
          r: '5',
          i: 126
        },
        '4,0': {
          r: '5',
          i: 79
        },
        '0,2': {
          r: '5',
          i: 125
        },
        '1,0': {
          r: '5',
          i: 81
        },
        '2,0': {
          r: '5',
          i: 111
        },
        '3,1': {
          r: '5',
          i: 79
        }
      },
      instances: [],
      properties: {
        dlayer: '3',
        cat: 'wallset'
      },
      tps: {
        '2,2': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        },
        '3,2': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '3,1': {
          s: '1'
        }
      }
    },
    sky004: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 321
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    tilesetD: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '8',
          i: 114
        },
        '0,0': {
          r: '8',
          i: 85
        },
        '3,2': {
          r: '8',
          i: 39
        },
        '2,2': {
          r: '8',
          i: 149
        },
        '6,1': {
          r: '8',
          i: 69
        },
        '1,0': {
          r: '8',
          i: 132
        },
        '5,0': {
          r: '8',
          i: 54
        },
        '4,2': {
          r: '8',
          i: 24
        },
        '1,1': {
          r: '8',
          i: 42
        },
        '5,3': {
          r: '8',
          i: 143
        },
        '7,1': {
          r: '8',
          i: 113
        },
        '6,0': {
          r: '8',
          i: 84
        },
        '2,1': {
          r: '8',
          i: 116
        },
        '3,0': {
          r: '8',
          i: 101
        },
        '0,1': {
          r: '8',
          i: 118
        },
        '2,0': {
          r: '8',
          i: 89
        },
        '6,3': {
          r: '8',
          i: 144
        },
        '8,0': {
          r: '8',
          i: 99
        },
        '5,1': {
          r: '8',
          i: 83
        },
        '6,2': {
          r: '8',
          i: 129
        },
        '1,2': {
          r: '8',
          i: 102
        },
        '4,0': {
          r: '8',
          i: 103
        },
        '0,2': {
          r: '8',
          i: 145
        },
        '7,0': {
          r: '8',
          i: 98
        },
        '5,2': {
          r: '8',
          i: 128
        },
        '4,1': {
          r: '8',
          i: 133
        },
        '3,1': {
          r: '8',
          i: 131
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '1',
          layer: '0.5'
        },
        '3,2': {
          block: '0'
        },
        '2,2': {
          block: '1',
          layer: '0.5'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          block: '1',
          layer: '0.5'
        },
        '5,0': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0',
          layer: '1'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '2,1': {
          block: '1',
          layer: '0.5'
        },
        '3,0': {
          block: '1',
          layer: '0.5'
        },
        '0,1': {
          block: '1',
          layer: '0.5'
        },
        '2,0': {
          block: '1',
          layer: '0.5'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          block: '1',
          layer: '0.5'
        },
        '4,0': {
          block: '1',
          layer: '0.5'
        },
        '0,2': {
          block: '1',
          layer: '0.5'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '1',
          layer: '0.5'
        },
        '3,1': {
          block: '1',
          layer: '0.5'
        }
      }
    },
    dstd1: {
      cols: 3,
      rows: 2,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '0',
          i: 93
        },
        '0,0': {
          r: '0',
          i: 78
        },
        '2,1': {
          r: '0',
          i: 224
        },
        '1,0': {
          r: '0',
          i: 63
        },
        '1,1': {
          r: '0',
          i: 63
        },
        '2,0': {
          r: '0',
          i: 209
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          test: 'flat'
        },
        '0,0': {
          test: 'edge;tileset7;1,2'
        },
        '2,1': {
          test: 'flat'
        },
        '1,0': {
          test: 'edge;tileset7;1,2'
        },
        '1,1': {
          layer: '0.5',
          test: 'flat'
        },
        '2,0': {
          test: 'edge;tileset7;1,2'
        }
      }
    },
    shine3_n: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 382
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    bed0: {
      cols: 2,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 139
        },
        '0,0': {
          r: '6',
          i: 124
        },
        '0,2': {
          r: '6',
          i: 154
        },
        '1,0': {
          r: '6',
          i: 125
        },
        '1,1': {
          r: '6',
          i: 140
        },
        '1,2': {
          r: '6',
          i: 155
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        }
      }
    },
    decobj3: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 218
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        }
      }
    },
    dstbi3a: {
      cols: 1,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '8',
          i: 115
        },
        '0,0': {
          r: '8',
          i: 100
        },
        '0,2': {
          r: '8',
          i: 115
        },
        '0,3': {
          r: '8',
          i: 130
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          test: 'edge;tilesetD;0,1',
          layer: '0',
          block: '0'
        },
        '0,0': {
          test: 'edge;tilesetD;0,1',
          layer: '0',
          block: '1'
        },
        '0,2': {
          layer: '0',
          test: 'edge;tilesetD;0,1',
          block: '0'
        },
        '0,3': {
          layer: '0',
          test: 'edge;tilesetD;0,1',
          block: '1'
        }
      }
    },
    igloo0: {
      cols: 5,
      rows: 6,
      baseLoc: '2,3',
      origin: '0,0',
      tiles: {
        '3,3': {
          r: '9',
          i: 48
        },
        '3,2': {
          r: '9',
          i: 33
        },
        '4,1': {
          r: '9',
          i: 19
        },
        '2,2': {
          r: '9',
          i: 32
        },
        '4,2': {
          r: '9',
          i: 34
        },
        '3,5': {
          r: '9',
          i: 78
        },
        '0,4': {
          r: '9',
          i: 60
        },
        '4,4': {
          r: '9',
          i: 64
        },
        '1,5': {
          r: '9',
          i: 76
        },
        '2,5': {
          r: '9',
          i: 77
        },
        '1,1': {
          r: '9',
          i: 16
        },
        '4,3': {
          r: '9',
          i: 49
        },
        '2,4': {
          r: '9',
          i: 62
        },
        '1,3': {
          r: '9',
          i: 46
        },
        '2,1': {
          r: '9',
          i: 17
        },
        '0,3': {
          r: '9',
          i: 45
        },
        '3,0': {
          r: '9',
          i: 3
        },
        '1,4': {
          r: '9',
          i: 61
        },
        '0,1': {
          r: '9',
          i: 15
        },
        '2,0': {
          r: '9',
          i: 2
        },
        '4,5': {
          r: '9',
          i: 79
        },
        '0,5': {
          r: '9',
          i: 75
        },
        '2,3': {
          r: '9',
          i: 47
        },
        '3,4': {
          r: '9',
          i: 63
        },
        '1,2': {
          r: '9',
          i: 31
        },
        '0,2': {
          r: '9',
          i: 30
        },
        '1,0': {
          r: '9',
          i: 1
        },
        '3,1': {
          r: '9',
          i: 18
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '2,1': {
          skyobj: '1'
        },
        '0,3': {
          layer: '9'
        },
        '3,5': {
          layer: '9'
        },
        '1,4': {
          skyobj: '1'
        },
        '2,2': {
          skyobj: '1'
        },
        '3,3': {
          skyobj: '1'
        },
        '3,2': {
          skyobj: '1'
        },
        '0,4': {
          layer: '9'
        },
        '4,4': {
          layer: '9'
        },
        '1,5': {
          layer: '9'
        },
        '2,3': {
          skyobj: '1'
        },
        '1,1': {
          layer: '9'
        },
        '4,3': {
          layer: '9'
        },
        '3,4': {
          skyobj: '1'
        },
        '1,2': {
          skyobj: '1'
        },
        '2,5': {
          layer: '9'
        },
        '0,2': {
          layer: '9'
        },
        '4,2': {
          layer: '9'
        },
        '2,4': {
          skyobj: '1'
        },
        '1,3': {
          skyobj: '1'
        },
        '3,1': {
          layer: '9'
        }
      }
    },
    sky000: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 299
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    platform5x5: {
      cols: 5,
      rows: 5,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 7
        },
        '2,1': {
          r: '6',
          i: 23
        },
        '0,3': {
          r: '6',
          i: 22
        },
        '1,3': {
          r: '6',
          i: 23
        },
        '3,0': {
          r: '6',
          i: 8
        },
        '1,4': {
          r: '6',
          i: 38
        },
        '0,1': {
          r: '6',
          i: 22
        },
        '3,3': {
          r: '6',
          i: 23
        },
        '1,0': {
          r: '6',
          i: 8
        },
        '0,4': {
          r: '6',
          i: 37
        },
        '4,4': {
          r: '6',
          i: 39
        },
        '2,2': {
          r: '6',
          i: 23
        },
        '2,3': {
          r: '6',
          i: 23
        },
        '1,1': {
          r: '6',
          i: 23
        },
        '3,2': {
          r: '6',
          i: 23
        },
        '0,2': {
          r: '6',
          i: 22
        },
        '2,0': {
          r: '6',
          i: 8
        },
        '1,2': {
          r: '6',
          i: 23
        },
        '4,0': {
          r: '6',
          i: 9
        },
        '4,3': {
          r: '6',
          i: 24
        },
        '4,2': {
          r: '6',
          i: 24
        },
        '2,4': {
          r: '6',
          i: 38
        },
        '4,1': {
          r: '6',
          i: 24
        },
        '3,4': {
          r: '6',
          i: 38
        },
        '3,1': {
          r: '6',
          i: 23
        }
      },
      instances: [],
      properties: {
        layer: 'ground'
      },
      tps: {}
    },
    sky010: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 0
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    sky005: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 267
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    table02: {
      cols: 5,
      rows: 5,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 7
        },
        '2,1': {
          r: '6',
          i: 23
        },
        '0,3': {
          r: '6',
          i: 22
        },
        '1,3': {
          r: '6',
          i: 23
        },
        '3,0': {
          r: '6',
          i: 8
        },
        '1,4': {
          r: '6',
          i: 38
        },
        '0,1': {
          r: '6',
          i: 22
        },
        '3,3': {
          r: '6',
          i: 23
        },
        '1,0': {
          r: '6',
          i: 8
        },
        '0,4': {
          r: '6',
          i: 37
        },
        '4,4': {
          r: '6',
          i: 39
        },
        '2,2': {
          r: '6',
          i: 23
        },
        '2,3': {
          r: '6',
          i: 23
        },
        '1,1': {
          r: '6',
          i: 23
        },
        '3,2': {
          r: '6',
          i: 23
        },
        '0,2': {
          r: '6',
          i: 22
        },
        '2,0': {
          r: '6',
          i: 8
        },
        '1,2': {
          r: '6',
          i: 23
        },
        '4,0': {
          r: '6',
          i: 9
        },
        '4,3': {
          r: '6',
          i: 24
        },
        '4,2': {
          r: '6',
          i: 24
        },
        '2,4': {
          r: '6',
          i: 38
        },
        '4,1': {
          r: '6',
          i: 24
        },
        '3,4': {
          r: '6',
          i: 38
        },
        '3,1': {
          r: '6',
          i: 23
        }
      },
      instances: [],
      properties: {
        dlayer: '1'
      },
      tps: {
        '0,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '0,3': {
          layer: '1'
        },
        '4,1': {
          layer: '1'
        },
        '3,0': {
          layer: '1'
        },
        '1,4': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '4,4': {
          layer: '1'
        },
        '3,3': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '0,4': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '2,3': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '3,2': {
          layer: '1'
        },
        '4,3': {
          layer: '1'
        },
        '3,4': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '4,0': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '4,2': {
          layer: '1'
        },
        '2,4': {
          layer: '1'
        },
        '1,3': {
          layer: '1'
        },
        '3,1': {
          layer: '1'
        }
      }
    },
    wallset9: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '7',
          i: 210
        },
        '0,0': {
          r: '7',
          i: 166
        },
        '2,1': {
          r: '7',
          i: 214
        },
        '3,2': {
          r: '7',
          i: 287
        },
        '3,0': {
          r: '7',
          i: 302
        },
        '1,2': {
          r: '7',
          i: 226
        },
        '2,2': {
          r: '7',
          i: 229
        },
        '4,0': {
          r: '7',
          i: 303
        },
        '0,2': {
          r: '7',
          i: 225
        },
        '1,0': {
          r: '7',
          i: 167
        },
        '2,0': {
          r: '7',
          i: 168
        },
        '3,1': {
          r: '7',
          i: 272
        }
      },
      instances: [],
      properties: {
        dlayer: '4',
        cat: 'wallset'
      },
      tps: {
        '2,2': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        },
        '3,2': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '3,1': {
          s: '1'
        }
      }
    },
    carpet0: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '1',
          i: 53
        },
        '0,0': {
          r: '1',
          i: 409
        },
        '3,2': {
          r: '1',
          i: 29
        },
        '8,2': {
          r: '1',
          i: 254
        },
        '9,0': {
          r: '1',
          i: 179
        },
        '2,2': {
          r: '1',
          i: 425
        },
        '6,1': {
          r: '1',
          i: 54
        },
        '1,0': {
          r: '1',
          i: 65
        },
        '5,0': {
          r: '1',
          i: 51
        },
        '8,3': {
          r: '1',
          i: 222
        },
        '4,2': {
          r: '1',
          i: 14
        },
        '1,1': {
          r: '1',
          i: 82
        },
        '5,3': {
          r: '1',
          i: 27
        },
        '7,1': {
          r: '1',
          i: 55
        },
        '6,0': {
          r: '1',
          i: 67
        },
        '7,3': {
          r: '1',
          i: 221
        },
        '2,1': {
          r: '1',
          i: 58
        },
        '3,1': {
          r: '1',
          i: 432
        },
        '9,3': {
          r: '1',
          i: 207
        },
        '3,0': {
          r: '1',
          i: 417
        },
        '0,1': {
          r: '1',
          i: 57
        },
        '9,1': {
          r: '1',
          i: 194
        },
        '9,2': {
          r: '1',
          i: 192
        },
        '6,3': {
          r: '1',
          i: 28
        },
        '8,0': {
          r: '1',
          i: 68
        },
        '7,2': {
          r: '1',
          i: 253
        },
        '5,1': {
          r: '1',
          i: 56
        },
        '2,0': {
          r: '1',
          i: 410
        },
        '1,2': {
          r: '1',
          i: 80
        },
        '4,0': {
          r: '1',
          i: 418
        },
        '0,2': {
          r: '1',
          i: 424
        },
        '7,0': {
          r: '1',
          i: 52
        },
        '5,2': {
          r: '1',
          i: 12
        },
        '4,1': {
          r: '1',
          i: 433
        },
        '6,2': {
          r: '1',
          i: 13
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '0.5'
        },
        '3,2': {
          block: '0'
        },
        '8,2': {
          block: '0'
        },
        '9,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '0.5'
        },
        '9,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          block: '0',
          layer: '0.5'
        },
        '5,0': {
          block: '0'
        },
        '8,3': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0',
          layer: '1'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '7,3': {
          block: '0'
        },
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '9,3': {
          block: '0'
        },
        '3,0': {
          block: '0',
          layer: '0.5'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '9,1': {
          block: '0'
        },
        '2,0': {
          block: '0',
          layer: '0.5'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '7,2': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          block: '0',
          layer: '0.5'
        },
        '4,0': {
          block: '0',
          layer: '0.5'
        },
        '0,2': {
          block: '0',
          layer: '0.5'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '0.5'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        }
      }
    },
    sky003: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 336
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    decobj7: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 222
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '0.5'
        }
      }
    },
    dsta2: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '0',
          i: 164
        },
        '0,0': {
          r: '0',
          i: 149
        },
        '0,2': {
          r: '0',
          i: 179
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          layer: '0.5',
          test: 'edge;tileset1;2,1'
        },
        '0,0': {
          test: 'edge;tileset1;2,1'
        },
        '0,2': {
          test: 'edge;tileset1;2,1'
        }
      }
    },
    sky047: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 16
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    weapon5: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 19
        }
      },
      instances: [],
      properties: {
        tip: 'sniper',
        cat: 'weapon'
      },
      tps: {
        '0,0': {
          stuff: '5'
        }
      }
    },
    shadow3_w: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 367
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    sky011: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 87
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    sea1: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '2',
          i: 50
        },
        '2,1': {
          r: '2',
          i: 67
        },
        '3,0': {
          r: '2',
          i: 45
        },
        '0,1': {
          r: '2',
          i: 65
        },
        '1,0': {
          r: '2',
          i: 51
        },
        '2,0': {
          r: '2',
          i: 52
        },
        '2,2': {
          r: '2',
          i: 82
        },
        '1,1': {
          r: '2',
          i: 66
        },
        '1,2': {
          r: '2',
          i: 81
        },
        '4,0': {
          r: '2',
          i: 47
        },
        '0,2': {
          r: '2',
          i: 80
        },
        '4,1': {
          r: '2',
          i: 77
        },
        '3,1': {
          r: '2',
          i: 75
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '0,0': {
          water: '1'
        },
        '2,1': {
          water: '1'
        },
        '3,0': {
          water: '1'
        },
        '2,2': {
          water: '1'
        },
        '1,0': {
          water: '1'
        },
        '2,0': {
          water: '1'
        },
        '0,1': {
          water: '1'
        },
        '1,1': {
          water: '1'
        },
        '1,2': {
          water: '1'
        },
        '4,0': {
          water: '1'
        },
        '0,2': {
          water: '1'
        },
        '4,1': {
          water: '1'
        },
        '3,1': {
          water: '1'
        }
      }
    },
    knife: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 23
        }
      },
      instances: [],
      properties: {
        cat: 'invisible'
      },
      tps: {}
    },
    dstc2: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 33
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset1;2,1'
        }
      }
    },
    boxStair0: {
      cols: 2,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 99
        },
        '1,0': {
          r: '0',
          i: 248
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1'
        },
        '1,0': {
          layer: '0.5',
          test: 'flat',
          block: '0'
        }
      }
    },
    shadow3_s: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 366
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    sky021: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 347
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    wallset6: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '5',
          i: 18
        },
        '0,0': {
          r: '5',
          i: 3
        },
        '2,1': {
          r: '5',
          i: 20
        },
        '3,2': {
          r: '5',
          i: 75
        },
        '3,0': {
          r: '5',
          i: 95
        },
        '1,2': {
          r: '5',
          i: 65
        },
        '2,2': {
          r: '5',
          i: 33
        },
        '4,0': {
          r: '5',
          i: 96
        },
        '0,2': {
          r: '5',
          i: 35
        },
        '1,0': {
          r: '5',
          i: 4
        },
        '2,0': {
          r: '5',
          i: 5
        },
        '3,1': {
          r: '5',
          i: 60
        }
      },
      instances: [],
      properties: {
        dlayer: '6',
        cat: 'wallset'
      },
      tps: {
        '2,2': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        },
        '3,2': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '3,1': {
          s: '1'
        }
      }
    },
    fireplace2: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 210
        },
        '2,0': {
          r: '6',
          i: 212
        },
        '1,0': {
          r: '6',
          i: 211
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '1,0': {
          layer: '3'
        }
      }
    },
    stair2: {
      cols: 1,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '0',
          i: 85
        },
        '0,0': {
          r: '0',
          i: 70
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          layer: '0.5',
          test: 'edge;tileset0;0,1'
        },
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset0;0,1'
        }
      }
    },
    dstd3: {
      cols: 2,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '0',
          i: 63
        },
        '0,0': {
          r: '0',
          i: 278
        },
        '0,2': {
          r: '0',
          i: 280
        },
        '1,0': {
          r: '0',
          i: 279
        },
        '1,1': {
          r: '0',
          i: 63
        },
        '1,2': {
          r: '0',
          i: 281
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          test: 'edge;tileset7;2,1'
        },
        '0,0': {
          test: 'edge;tileset7;2,1'
        },
        '0,2': {
          test: 'edge;tileset7;2,1'
        },
        '1,0': {
          test: 'flat'
        },
        '1,1': {
          layer: '0.5',
          test: 'flat'
        },
        '1,2': {
          test: 'flat'
        }
      }
    },
    tileset8D2: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '1',
          i: 460
        },
        '0,0': {
          r: '1',
          i: 0
        },
        '3,2': {
          r: '1',
          i: 455
        },
        '8,2': {
          r: '1',
          i: 475
        },
        '9,0': {
          r: '1',
          i: 446
        },
        '2,2': {
          r: '1',
          i: 32
        },
        '6,1': {
          r: '1',
          i: 458
        },
        '1,0': {
          r: '1',
          i: 76
        },
        '5,0': {
          r: '1',
          i: 442
        },
        '8,3': {
          r: '1',
          i: 490
        },
        '4,2': {
          r: '1',
          i: 456
        },
        '1,1': {
          r: '1',
          i: 16
        },
        '5,3': {
          r: '1',
          i: 487
        },
        '7,1': {
          r: '1',
          i: 459
        },
        '6,0': {
          r: '1',
          i: 443
        },
        '7,3': {
          r: '1',
          i: 489
        },
        '2,1': {
          r: '1',
          i: 60
        },
        '3,1': {
          r: '1',
          i: 75
        },
        '9,3': {
          r: '1',
          i: 491
        },
        '3,0': {
          r: '1',
          i: 45
        },
        '0,1': {
          r: '1',
          i: 62
        },
        '9,1': {
          r: '1',
          i: 461
        },
        '9,2': {
          r: '1',
          i: 476
        },
        '6,3': {
          r: '1',
          i: 488
        },
        '8,0': {
          r: '1',
          i: 445
        },
        '7,2': {
          r: '1',
          i: 474
        },
        '5,1': {
          r: '1',
          i: 457
        },
        '2,0': {
          r: '1',
          i: 2
        },
        '1,2': {
          r: '1',
          i: 46
        },
        '4,0': {
          r: '1',
          i: 47
        },
        '0,2': {
          r: '1',
          i: 30
        },
        '7,0': {
          r: '1',
          i: 444
        },
        '5,2': {
          r: '1',
          i: 472
        },
        '4,1': {
          r: '1',
          i: 77
        },
        '6,2': {
          r: '1',
          i: 473
        }
      },
      instances: [],
      properties: {
        cat: 'tileset',
        flat: '1'
      },
      tps: {
        '0,0': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '3,0': {
          block: '0'
        },
        '2,2': {
          block: '0'
        },
        '1,0': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '0,1': {
          block: '0'
        },
        '1,1': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '4,0': {
          block: '0'
        },
        '0,2': {
          block: '0'
        },
        '4,1': {
          block: '0'
        },
        '3,1': {
          block: '0'
        }
      }
    },
    shine1_w: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 332
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    house5: {
      cols: 4,
      rows: 7,
      baseLoc: '1,3',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 4
        },
        '3,3': {
          r: '0',
          i: 52
        },
        '3,2': {
          r: '0',
          i: 37
        },
        '1,6': {
          r: '0',
          i: 95
        },
        '2,2': {
          r: '0',
          i: 36
        },
        '1,0': {
          r: '0',
          i: 5
        },
        '0,4': {
          r: '0',
          i: 64
        },
        '1,5': {
          r: '0',
          i: 80
        },
        '2,5': {
          r: '0',
          i: 81
        },
        '1,1': {
          r: '0',
          i: 20
        },
        '3,6': {
          r: '0',
          i: 97
        },
        '2,4': {
          r: '0',
          i: 66
        },
        '1,3': {
          r: '0',
          i: 50
        },
        '2,1': {
          r: '0',
          i: 21
        },
        '0,3': {
          r: '0',
          i: 49
        },
        '3,0': {
          r: '0',
          i: 7
        },
        '1,4': {
          r: '0',
          i: 65
        },
        '0,1': {
          r: '0',
          i: 19
        },
        '0,6': {
          r: '0',
          i: 94
        },
        '2,0': {
          r: '0',
          i: 6
        },
        '2,6': {
          r: '0',
          i: 96
        },
        '0,5': {
          r: '0',
          i: 79
        },
        '2,3': {
          r: '0',
          i: 51
        },
        '3,4': {
          r: '0',
          i: 67
        },
        '1,2': {
          r: '0',
          i: 35
        },
        '0,2': {
          r: '0',
          i: 34
        },
        '3,5': {
          r: '0',
          i: 82
        },
        '3,1': {
          r: '0',
          i: 22
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,6': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '0,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,5': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,5': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,6': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,6': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,6': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '0,5': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,5': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        }
      }
    },
    dstbi0: {
      cols: 4,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 71
        },
        '1,0': {
          r: '8',
          i: 72
        },
        '2,0': {
          r: '8',
          i: 72
        },
        '3,0': {
          r: '8',
          i: 73
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0',
          test: 'edge;tilesetC;1,2',
          block: '1'
        },
        '1,0': {
          test: 'edge;tilesetC;1,2',
          layer: '0',
          block: '0'
        },
        '2,0': {
          layer: '0',
          test: 'edge;tilesetC;1,2',
          block: '0'
        },
        '3,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetC;1,2'
        }
      }
    },
    sky020: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 61
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    table6: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 132
        },
        '0,0': {
          r: '6',
          i: 117
        },
        '1,0': {
          r: '6',
          i: 118
        },
        '1,1': {
          r: '6',
          i: 133
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        }
      }
    },
    wallset8: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '7',
          i: 191
        },
        '0,0': {
          r: '7',
          i: 176
        },
        '2,1': {
          r: '7',
          i: 193
        },
        '3,2': {
          r: '7',
          i: 248
        },
        '3,0': {
          r: '7',
          i: 268
        },
        '1,2': {
          r: '7',
          i: 238
        },
        '2,2': {
          r: '7',
          i: 206
        },
        '4,0': {
          r: '7',
          i: 269
        },
        '0,2': {
          r: '7',
          i: 208
        },
        '1,0': {
          r: '7',
          i: 177
        },
        '2,0': {
          r: '7',
          i: 178
        },
        '3,1': {
          r: '7',
          i: 233
        }
      },
      instances: [],
      properties: {
        dlayer: '6',
        cat: 'wallset'
      },
      tps: {
        '2,2': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        },
        '3,2': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '3,1': {
          s: '1'
        }
      }
    },
    pillar1: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '1',
          i: 225
        },
        '0,0': {
          r: '1',
          i: 166
        },
        '1,0': {
          r: '1',
          i: 168
        },
        '1,1': {
          r: '1',
          i: 229
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        },
        '1,1': {
          s: '1',
          layer: '9'
        }
      }
    },
    shine3_w: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 381
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    sky001: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 267
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    shine1_e: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 348
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    bridge4: {
      cols: 9,
      rows: 5,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '7',
          i: 85
        },
        '0,0': {
          r: '7',
          i: 267
        },
        '3,3': {
          r: '7',
          i: 202
        },
        '3,2': {
          r: '7',
          i: 267
        },
        '8,2': {
          r: '7',
          i: 85
        },
        '2,2': {
          r: '4',
          i: 401
        },
        '6,1': {
          r: '4',
          i: 403
        },
        '1,0': {
          r: '4',
          i: 386
        },
        '0,4': {
          r: '7',
          i: 187
        },
        '8,3': {
          r: '7',
          i: 189
        },
        '4,2': {
          r: '4',
          i: 402
        },
        '1,1': {
          r: '7',
          i: 104
        },
        '5,3': {
          r: '7',
          i: 99
        },
        '5,0': {
          r: '7',
          i: 98
        },
        '7,1': {
          r: '7',
          i: 160
        },
        '4,3': {
          r: '7',
          i: 267
        },
        '6,0': {
          r: '7',
          i: 267
        },
        '7,3': {
          r: '7',
          i: 188
        },
        '0,2': {
          r: '7',
          i: 267
        },
        '2,1': {
          r: '7',
          i: 104
        },
        '0,3': {
          r: '7',
          i: 172
        },
        '2,4': {
          r: '7',
          i: 132
        },
        '1,3': {
          r: '7',
          i: 100
        },
        '3,0': {
          r: '7',
          i: 267
        },
        '1,4': {
          r: '7',
          i: 132
        },
        '0,1': {
          r: '7',
          i: 83
        },
        '6,2': {
          r: '4',
          i: 403
        },
        '6,3': {
          r: '7',
          i: 267
        },
        '8,0': {
          r: '7',
          i: 174
        },
        '7,2': {
          r: '7',
          i: 160
        },
        '5,1': {
          r: '7',
          i: 104
        },
        '2,0': {
          r: '4',
          i: 386
        },
        '1,2': {
          r: '4',
          i: 401
        },
        '4,0': {
          r: '7',
          i: 267
        },
        '2,3': {
          r: '7',
          i: 100
        },
        '7,0': {
          r: '7',
          i: 173
        },
        '5,2': {
          r: '7',
          i: 104
        },
        '4,1': {
          r: '4',
          i: 402
        },
        '3,4': {
          r: '7',
          i: 217
        },
        '3,1': {
          r: '7',
          i: 84
        }
      },
      instances: [],
      properties: {
        size: '2',
        cat: 'bridge'
      },
      tps: {
        '0,0': {
          s: '1',
          layer: '3'
        },
        '2,1': {
          layer: '1',
          block: '0'
        },
        '3,2': {
          s: '1',
          layer: '3'
        },
        '6,0': {
          s: '1',
          layer: '3'
        },
        '3,0': {
          s: '1',
          layer: '3'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '0,2': {
          s: '1',
          layer: '3'
        },
        '5,0': {
          block: '0',
          layer: '0.5'
        },
        '6,3': {
          s: '1',
          layer: '3'
        },
        '5,1': {
          layer: '1',
          block: '0'
        },
        '1,1': {
          layer: '1',
          block: '0'
        },
        '5,3': {
          block: '0',
          layer: '0.5'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '4,0': {
          s: '1',
          layer: '3'
        },
        '4,3': {
          s: '1',
          layer: '3'
        },
        '5,2': {
          layer: '1',
          block: '0'
        }
      }
    },
    boxStair2: {
      cols: 1,
      rows: 2,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '0',
          i: 130
        },
        '0,0': {
          r: '0',
          i: 263
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1'
        },
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '0.5'
        }
      }
    },
    sky019: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 165
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    lib_moveable_5: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 46
        },
        '2,0': {
          r: '6',
          i: 48
        },
        '1,0': {
          r: '6',
          i: 47
        }
      },
      instances: [],
      properties: {
        dlayer: '2',
        cat: 'device',
        device: 'block'
      },
      tps: {}
    },
    sky041: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 73
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    bed3: {
      cols: 3,
      rows: 2,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 159
        },
        '0,0': {
          r: '6',
          i: 144
        },
        '2,1': {
          r: '6',
          i: 161
        },
        '1,0': {
          r: '6',
          i: 145
        },
        '1,1': {
          r: '6',
          i: 160
        },
        '2,0': {
          r: '6',
          i: 146
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,1': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        }
      }
    },
    bed6: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,1': {
          r: '6',
          i: 192
        },
        '0,0': {
          r: '6',
          i: 177
        },
        '2,1': {
          r: '6',
          i: 194
        },
        '1,1': {
          r: '6',
          i: 193
        },
        '1,2': {
          r: '6',
          i: 208
        },
        '2,2': {
          r: '6',
          i: 209
        },
        '0,2': {
          r: '6',
          i: 207
        },
        '1,0': {
          r: '6',
          i: 178
        },
        '2,0': {
          r: '6',
          i: 179
        }
      },
      instances: [],
      properties: {},
      tps: {
        '2,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        }
      }
    },
    tileset2: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '1',
          i: 163
        },
        '0,0': {
          r: '1',
          i: 405
        },
        '3,2': {
          r: '1',
          i: 314
        },
        '8,2': {
          r: '1',
          i: 174
        },
        '9,0': {
          r: '1',
          i: 172
        },
        '2,2': {
          r: '1',
          i: 421
        },
        '6,1': {
          r: '1',
          i: 100
        },
        '1,0': {
          r: '1',
          i: 98
        },
        '5,0': {
          r: '1',
          i: 132
        },
        '8,3': {
          r: '1',
          i: 189
        },
        '4,2': {
          r: '1',
          i: 329
        },
        '1,1': {
          r: '1',
          i: 104
        },
        '5,3': {
          r: '1',
          i: 133
        },
        '7,1': {
          r: '1',
          i: 164
        },
        '6,0': {
          r: '1',
          i: 160
        },
        '7,3': {
          r: '1',
          i: 188
        },
        '2,1': {
          r: '1',
          i: 84
        },
        '3,1': {
          r: '1',
          i: 428
        },
        '9,3': {
          r: '1',
          i: 217
        },
        '3,0': {
          r: '1',
          i: 413
        },
        '0,1': {
          r: '1',
          i: 83
        },
        '9,1': {
          r: '1',
          i: 187
        },
        '9,2': {
          r: '1',
          i: 202
        },
        '6,3': {
          r: '1',
          i: 102
        },
        '8,0': {
          r: '1',
          i: 161
        },
        '7,2': {
          r: '1',
          i: 173
        },
        '5,1': {
          r: '1',
          i: 85
        },
        '2,0': {
          r: '1',
          i: 406
        },
        '1,2': {
          r: '1',
          i: 99
        },
        '4,0': {
          r: '1',
          i: 414
        },
        '0,2': {
          r: '1',
          i: 420
        },
        '7,0': {
          r: '1',
          i: 162
        },
        '5,2': {
          r: '1',
          i: 175
        },
        '4,1': {
          r: '1',
          i: 429
        },
        '6,2': {
          r: '1',
          i: 131
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '8,1': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '0.5'
        },
        '3,2': {
          block: '0'
        },
        '8,2': {
          block: '0'
        },
        '9,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '0.5'
        },
        '9,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '1,0': {
          block: '0',
          layer: '0.5'
        },
        '5,0': {
          block: '0'
        },
        '8,3': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '1,1': {
          block: '0',
          layer: '1'
        },
        '5,3': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '7,3': {
          block: '0'
        },
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '9,3': {
          block: '0'
        },
        '3,0': {
          block: '0',
          layer: '1'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '9,1': {
          block: '0'
        },
        '2,0': {
          block: '0',
          layer: '0.5'
        },
        '6,3': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '7,2': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '1,2': {
          block: '0',
          layer: '0.5'
        },
        '4,0': {
          block: '0',
          layer: '1'
        },
        '0,2': {
          block: '0',
          layer: '0.5'
        },
        '7,0': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '1'
        },
        '3,1': {
          block: '0',
          layer: '1'
        }
      }
    },
    rug1: {
      cols: 2,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 62
        },
        '1,0': {
          r: '6',
          i: 63
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '0'
        },
        '1,0': {
          layer: '0'
        }
      }
    },
    weapon8: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 22
        }
      },
      instances: [],
      properties: {
        tip: 'shield',
        cat: 'weapon'
      },
      tps: {
        '0,0': {
          stuff: '6'
        }
      }
    },
    sky044: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 163
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    bridge5: {
      cols: 9,
      rows: 5,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '8,1': {
          r: '7',
          i: 244
        },
        '0,0': {
          r: '7',
          i: 336
        },
        '3,3': {
          r: '7',
          i: 262
        },
        '3,2': {
          r: '7',
          i: 336
        },
        '8,2': {
          r: '7',
          i: 244
        },
        '2,2': {
          r: '4',
          i: 400
        },
        '6,1': {
          r: '4',
          i: 399
        },
        '1,0': {
          r: '4',
          i: 385
        },
        '0,4': {
          r: '7',
          i: 307
        },
        '8,3': {
          r: '7',
          i: 276
        },
        '4,2': {
          r: '4',
          i: 398
        },
        '1,1': {
          r: '7',
          i: 180
        },
        '5,3': {
          r: '7',
          i: 185
        },
        '5,0': {
          r: '7',
          i: 186
        },
        '7,1': {
          r: '7',
          i: 169
        },
        '4,3': {
          r: '7',
          i: 336
        },
        '6,0': {
          r: '7',
          i: 336
        },
        '7,3': {
          r: '7',
          i: 275
        },
        '0,2': {
          r: '7',
          i: 336
        },
        '2,1': {
          r: '7',
          i: 180
        },
        '0,3': {
          r: '7',
          i: 292
        },
        '2,4': {
          r: '7',
          i: 212
        },
        '1,3': {
          r: '7',
          i: 184
        },
        '3,0': {
          r: '7',
          i: 336
        },
        '1,4': {
          r: '7',
          i: 212
        },
        '0,1': {
          r: '7',
          i: 170
        },
        '6,2': {
          r: '4',
          i: 399
        },
        '6,3': {
          r: '7',
          i: 336
        },
        '8,0': {
          r: '7',
          i: 261
        },
        '7,2': {
          r: '7',
          i: 169
        },
        '5,1': {
          r: '7',
          i: 180
        },
        '2,0': {
          r: '4',
          i: 385
        },
        '1,2': {
          r: '4',
          i: 400
        },
        '4,0': {
          r: '7',
          i: 336
        },
        '2,3': {
          r: '7',
          i: 184
        },
        '7,0': {
          r: '7',
          i: 260
        },
        '5,2': {
          r: '7',
          i: 180
        },
        '4,1': {
          r: '4',
          i: 398
        },
        '3,4': {
          r: '7',
          i: 277
        },
        '3,1': {
          r: '7',
          i: 171
        }
      },
      instances: [],
      properties: {
        size: '2',
        cat: 'bridge'
      },
      tps: {
        '0,0': {
          s: '1',
          layer: '3'
        },
        '2,1': {
          layer: '1',
          block: '0'
        },
        '3,2': {
          s: '1',
          layer: '3'
        },
        '6,0': {
          s: '1',
          layer: '3'
        },
        '3,0': {
          s: '1',
          layer: '3'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '0,2': {
          s: '1',
          layer: '3'
        },
        '5,0': {
          block: '0',
          layer: '0.5'
        },
        '6,3': {
          s: '1',
          layer: '3'
        },
        '5,1': {
          layer: '1',
          block: '0'
        },
        '1,1': {
          layer: '1',
          block: '0'
        },
        '5,3': {
          block: '0',
          layer: '0.5'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '4,0': {
          s: '1',
          layer: '3'
        },
        '4,3': {
          s: '1',
          layer: '3'
        },
        '5,2': {
          layer: '1',
          block: '0'
        }
      }
    },
    sky027: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 104
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    }
  },
  editor: {
    size: '30,30',
    layers: [
      {
        map: 'tileset0'
      },
      {
        map: {}
      },
      {
        map: {}
      },
      {
        map: {}
      },
      {
        map: {}
      }
    ],
    objs: {},
    walls: {}
  }
})
