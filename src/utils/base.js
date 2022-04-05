const base = {
    get() {
        return {
            url : "http://localhost:8080/",
            name: "springbootsk8bh",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "商店商品管理系统"
        }
    }
}
export default base
