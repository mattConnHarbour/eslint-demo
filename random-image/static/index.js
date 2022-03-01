import imageFrame from '../static/components/imageFrame.js'
import getImage from '../static/getImage.js'

Vue.component('image-frame', imageFrame)

const app = new Vue({
    el: '#root',
    data: {
        imgCount: 3,
        imgData: [],
    },
    mounted(){
        // initial population of data array
        for(let i=0; i < this.imgCount; i++){
            this.imgData.push({
                loading: true,
                url: null
            })
        }

        // initial fetch of img urls
        this.imgData.forEach(img => {
            getImage().then(url => {
                img.url = url
                img.loading = false
            })
        })
    },
    methods: {
        updateimg(index){
            const img = this.imgData[index]
            img.loading = true
            getImage().then(url => {
                img.loading = false
                img.url = url
            })
        }
    },
    template: `<div class="wrapper has-background-light">
        <div class="hero">
            <div class="hero-body">
                <div class="columns is-centered is-flex-wrap-wrap">
                    <div v-for="(img, i) in imgData" class="column is-4">
                        <image-frame
                        :loading=img.loading
                        :url=img.url 
                        :index=i
                        @getImg=updateimg
                        />
                    </div>
                </div>
            </div> <!-- end hero body -->
        </div> <!-- end hero -->
    </div>`
})