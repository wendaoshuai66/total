Vue.component("total-list",{
    template:` <div class="box">
             <input type="text" v-model="con" placeholder="请输入内容" @keyup.13="aa" class="text" v-focus="">
    <div class="fenlei">
        <input type="button" value="未完成" :class="{red:status=='0'}" @click="changStatus('0')">
        <input type="button" value="已完成" :class="{red:status=='1'}" @click="changStatus('1')">
        <input type="button" value="全部" :class="{red:status=='all'}" @click="changStatus('all')">
    </div>
    <ul class="list">
           <li v-for="item in data">
               <div v-if="item.eito" @dblclick="focuss(item)">
                   <span class="opt" :class="{bg:item.status}" @click="changeState(item)"></span>
                   <p>{{item.title}}</p>
                   <span class="del" @click="del(item.id)">删除</span>
               </div>
               <input type="text" v-else v-model="item.title" @blur="focuss(item)">
           </li>
        <div v-show="all.length==0" class="data">请输入数据</div>
    </ul>
          </div>
        `,
    data(){
        return{
            all:localStorage.tota?JSON.parse(localStorage.tota):[],
            con:"",
            status:"all",
        }
    },
    methods:{
        aa(){
            if(!this.con){
                alert("请输入内容")
                return;
            }
            let  obj={};
            obj.id=Math.random()*(new Date()).getTime();
            obj.title=this.con;
            obj.status=0;
            obj.eito=true;
            this.all.push(obj);
            this.con="";
            localStorage.tota=JSON.stringify(this.all)
        },
        changStatus(val){
            this.status=val;
        },
        changeState(obj){
            if(obj.status==0){
                obj.status=1
            }else {
                obj.status=0;
            }
            localStorage.tota=JSON.stringify(this.all)
        },
        del(val){
            this.all=this.all.filter(ele=>{
                return ele.id!=val;
            })
            localStorage.tota=JSON.stringify(this.all)
        },
        focuss(obj){
            obj.eito=!obj.eito;
            localStorage.tota=JSON.stringify(this.all)
        }
    },
    computed:{
        data(){
            return data=this.all.filter((ele)=>{
                if(this.status=="all"){
                    return ele;
                }else if(this.status=="0"){
                    return ele.status==0;
                }else if(this.status=="1"){
                    return ele.status==1;
                }
            })
        }
    }
})