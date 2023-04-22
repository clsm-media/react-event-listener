import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import pkg from './package.json';

const input = './src/index.js';
const external = id => !id.startsWith('.') && !id.startsWith('/');

const globals = {
  react: 'React',
  'prop-types': 'PropTypes',
};

const getBabelOptions = ({ useESModules }) => ({
  exclude: '**/node_modules/**',
  runtimeHelpers: true,
  plugins: [['@babel/transform-runtime', { useESModules }]],
});

export default [
  {
    input,
    output: {
      file: 'dist/react-event-listener.umd.js',
      format: 'umd',
      exports: 'named',
      name: 'ReactEventListener',
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      commonjs({ include: '**/node_modules/**' }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  }
];
