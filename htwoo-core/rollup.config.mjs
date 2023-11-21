import json from '@rollup/plugin-json';
import {
  terser
} from 'rollup-plugin-terser';

export default [{
    input: 'src/js/main.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/umd/htwoo.js',
        name: 'htwoo',
        format: 'umd'
      },
      {
        file: '../packages/htwoo-core/dist/js/umd/htwoo.min.js',
        format: 'umd',
        name: 'htwoo',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/dialog.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/umd/htwoo.dialog.js',
        name: 'htwoo.dialog',
        format: 'umd'
      },
      {
        file: '../packages/htwoo-core/dist/js/umd/htwoo.dialog.min.js',
        format: 'umd',
        name: 'htwoo.dialog',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/nav.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/umd/htwoo.nav.js',
        name: 'htwoo.nav',
        format: 'umd'
      },
      {
        file: '../packages/htwoo-core/dist/js/umd/htwoo.nav.min.js',
        format: 'umd',
        name: 'htwoo.nav',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/overflow.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/umd/htwoo.overflow.js',
        name: 'htwoo.overflow',
        format: 'umd'
      },
      {
        file: '../packages/htwoo-core/dist/js/umd/htwoo.overflow.min.js',
        format: 'umd',
        name: 'htwoo.overflow',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/pivot.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/umd/htwoo.pivot.js',
        name: 'htwoo.pivot',
        format: 'umd'
      },
      {
        file: '../packages/htwoo-core/dist/js/umd/htwoo.pivot.min.js',
        format: 'umd',
        name: 'htwoo.pivot',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/select.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/umd/htwoo.select.js',
        name: 'htwoo.select',
        format: 'umd'
      },
      {
        file: '../packages/htwoo-core/dist/js/umd/htwoo.select.min.js',
        format: 'umd',
        name: 'htwoo.select',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/table.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/umd/htwoo.table.js',
        name: 'htwoo.table',
        format: 'umd'
      },
      {
        file: '../packages/htwoo-core/dist/js/umd/htwoo.table.min.js',
        format: 'umd',
        name: 'htwoo.table',
        plugins: [terser()]
      }
    ]
  },

  // Common js
  {
    input: 'src/js/main.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/cjs/htwoo.js',
        name: 'htwoo',
        format: 'amd'
      },
      {
        file: '../packages/htwoo-core/dist/js/cjs/htwoo.min.js',
        format: 'amd',
        name: 'htwoo',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/dialog.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/cjs/htwoo.dialog.js',
        name: 'htwoo.dialog',
        format: 'amd'
      },
      {
        file: '../packages/htwoo-core/dist/js/cjs/htwoo.dialog.min.js',
        format: 'amd',
        name: 'htwoo.dialog',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/nav.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/cjs/htwoo.nav.js',
        name: 'htwoo.nav',
        format: 'amd'
      },
      {
        file: '../packages/htwoo-core/dist/js/cjs/htwoo.nav.min.js',
        format: 'amd',
        name: 'htwoo.nav',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/overflow.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/cjs/htwoo.overflow.js',
        name: 'htwoo.overflow',
        format: 'amd'
      },
      {
        file: '../packages/htwoo-core/dist/js/cjs/htwoo.overflow.min.js',
        format: 'amd',
        name: 'htwoo.overflow',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/pivot.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/cjs/htwoo.pivot.js',
        name: 'htwoo.pivot',
        format: 'amd'
      },
      {
        file: '../packages/htwoo-core/dist/js/cjs/htwoo.pivot.min.js',
        format: 'amd',
        name: 'htwoo.pivot',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/select.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/cjs/htwoo.select.js',
        name: 'htwoo.select',
        format: 'amd'
      },
      {
        file: '../packages/htwoo-core/dist/js/cjs/htwoo.select.min.js',
        format: 'cjs',
        name: 'htwoo.select',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/table.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/cjs/htwoo.table.js',
        name: 'htwoo.table',
        format: 'cjs'
      },
      {
        file: '../packages/htwoo-core/dist/js/cjs/htwoo.table.min.js',
        format: 'umd',
        name: 'htwoo.table',
        plugins: [terser()]
      }
    ]
  },
  // AMD js
  {
    input: 'src/js/main.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/amd/htwoo.js',
        name: 'htwoo',
        format: 'amd'
      },
      {
        file: '../packages/htwoo-core/dist/js/amd/htwoo.min.js',
        format: 'amd',
        name: 'htwoo',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/dialog.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/amd/htwoo.dialog.js',
        name: 'htwoo.dialog',
        format: 'amd'
      },
      {
        file: '../packages/htwoo-core/dist/js/amd/htwoo.dialog.min.js',
        format: 'amd',
        name: 'htwoo.dialog',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/nav.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/amd/htwoo.nav.js',
        name: 'htwoo.nav',
        format: 'amd'
      },
      {
        file: '../packages/htwoo-core/dist/js/amd/htwoo.nav.min.js',
        format: 'amd',
        name: 'htwoo.nav',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/overflow.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/amd/htwoo.overflow.js',
        name: 'htwoo.overflow',
        format: 'amd'
      },
      {
        file: '../packages/htwoo-core/dist/js/amd/htwoo.overflow.min.js',
        format: 'amd',
        name: 'htwoo.overflow',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/pivot.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/amd/htwoo.pivot.js',
        name: 'htwoo.pivot',
        format: 'amd'
      },
      {
        file: '../packages/htwoo-core/dist/js/amd/htwoo.pivot.min.js',
        format: 'amd',
        name: 'htwoo.pivot',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/select.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/amd/htwoo.select.js',
        name: 'htwoo.select',
        format: 'amd'
      },
      {
        file: '../packages/htwoo-core/dist/js/amd/htwoo.select.min.js',
        format: 'amd',
        name: 'htwoo.select',
        plugins: [terser()]
      }
    ]
  }
  ,
  {
    input: 'src/js/table.js',
    output: [{
        file: '../packages/htwoo-core/dist/js/amd/htwoo.table.js',
        name: 'htwoo.table',
        format: 'amd'
      },
      {
        file: '../packages/htwoo-core/dist/js/amd/htwoo.table.min.js',
        format: 'umd',
        name: 'htwoo.table',
        plugins: [terser()]
      }
    ]
  }

];