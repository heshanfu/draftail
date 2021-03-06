import babel from 'rollup-plugin-babel';
import pkg from '../package.json';

export default [
    {
        input: 'lib/index.js',
        external: ['draft-js/lib/isSoftNewlineEvent']
            .concat(Object.keys(pkg.dependencies))
            .concat(Object.keys(pkg.peerDependencies)),
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' },
        ],
        plugins: [
            babel(
                Object.assign({}, pkg.babel, {
                    babelrc: false,
                    plugins: pkg.babel.plugins.concat(['external-helpers']),
                    exclude: ['node_modules/**'],
                }),
            ),
        ],
    },
];
