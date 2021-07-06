<template>
    <div>
        <div>
            <button @click="changeURL">URL切换</button>
            <button @click="domtoimageShot">DOM2IMG截图</button>
            <button @click="crxShot">CRX截图</button>
        </div>
        <div>
            <iframe :src="URL" id="iframeID" frameborder="0" width="800" height="600">
            </iframe>
        </div>
    </div>
</template>

<script>
    const BAIDU = 'https://baidu.com';
    const SOUGOU = 'https://sougou.com/';

    import domtoimage from 'dom-to-image';

    export default {
        name: "d_test01",
        data() {
            return {
                URL: BAIDU
            }
        },
        methods: {
            changeURL() {
                if (this.URL.indexOf('baidu') === -1) {
                    this.URL = BAIDU
                } else {
                    this.URL = SOUGOU
                }
            },
            domtoimageShot() {
                const node = document.getElementById('iframeID');
                domtoimage.toPng(node)
                    .then(dataUrl => {
                        const link = document.createElement('a');
                        link.download = 'dom2image.png';
                        link.href = dataUrl;
                        link.click()
                    })
                    .catch(error => {
                        console.error('Something went wrong!', error);
                    });
            },
            crxShot() {
                const msg = {cmd: 'screenshot', value: this.getPageSize()};

                try {
                    // eslint-disable-next-line
                    chromeInject.sendMsgToContent(msg)
                } catch (e) {
                    console.error('Please check that you have the screenshot-ctx installed' +
                        'See more: https://github.com/liduo-d/screenshot-crx')
                }
            },

            getPageSize() {
                const rect = document.getElementById('iframeID').getBoundingClientRect();
                return {
                    x: rect.x,
                    y: rect.y,
                    width: rect.width,
                    height: rect.height
                }
            }
        }
    }
</script>

<style scoped>

</style>
