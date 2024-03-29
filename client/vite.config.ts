import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                // target: 'http://localhost:8000',
                target: 'http://localhost:1337',
                // target: 'http://localhost:{PORT}',
                changeOrigin: true,
                secure: false,
                headers: {
                    Connection: 'keep-alive',
                    Accept: 'application/json',
                    ContentType: 'application/json',

                    // Тестовый токен (полный доступ ко всем функциям)
                    Authorization:
                        // 'Bearer f2812c8bb1a73a366632c826050489ee0ca1dc808465e4e940ad24438478a9094cab958beb804a1c1cc3ef49779450c54e3cac1af27c1042628a56b007a8e26c0e0fc35c65c972e638e835048c280976191569db35e1aacba4dde58031ba03b80de65b52aa7095ce51a71603e5c08c35dfcc6e513d1eff27092f092865494595',

                        //develop-token
                        'Bearer 0a0ccaa8efb35d7103803f7b21d63f4f4e884013ea61c9fdf742435afc9cd58a99f8376720004556aef5e7a36ef02b2bc017c49c68e0841a4773db93660b1318a3f9d18f726f4b81d4c6cfda8533f534314139a5a701c5eed56e6906af68547a99725d2004aa76f717024ea46cef794381af99f4fe6da43a45235546ab3f6e92',

                    // Authorization: 'Bearer a1053a28aff8af0c896b64c8008023bcda721637b9d88e12e89ba1b0bde532ffb043912ac0604a5221fc3ba60a922369cb044843691aa97e97e37766273220bbc813c7ce6ffef809c6cf5c60886223ad694bba9d79c40c2672227f01d51d1c69868dbaf85695444190d197d907215c4e536e710681dbd0e9d205bc14c59415c8'
                },
            },
        },
    },
});
