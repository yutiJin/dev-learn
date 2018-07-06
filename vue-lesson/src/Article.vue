<template>
    <div class="container">
        <h1>{{title}} </h1>
        <p>发表于{{date | moment}} </p>
        <p class="lead"> 
            {{content}}
        </p>
        <app-author></app-author>
    </div>
</template>

<script>
import moment from "moment";
import Author from "./Author.vue"
export default {
    data () {
        return {
            title : "震惊！！！",
            date : new Date(),
            content : "为何过年亲戚催婚"
        }
    },
    filters: {
        moment : function(value) {
            return moment(value).format("MMMM Do")
        }
    },
    components: {
        "app-author" : Author
    }
}
</script>

