Vue.component("select-inputs",{
    props:["title1"],
    template:`
        <div class="select-input">
        <input type="text" v-model="title1" @focus="focus">
    </div>
        `,
    data(){
        return{

        }
    },
    methods:{
        focus(){
            this.$emit('increment');
        }
    }
})

Vue.component("select-lists",{
    props:["list","stt"],
    template:`
        <ul class="select-list" v-show="stt">
            <li v-for="item in list" @click="blur(item.title)">
               {{item.title}}
            </li>
        </ul>
        `,
    data(){
        return{

        }
    },
    methods:{
        blur(val){
            console.log(val)
            this.$emit('increment',val);
        }
    }
})