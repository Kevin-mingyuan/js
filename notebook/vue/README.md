### vue some noteBook

### table 使用tr组件出现渲染结构不对的问题
    如果注册了一个tr组件 渲染在table内 会导致渲染结构tr在table外
    <table>
        <tr is="声明子组件的name"></tr>
    </table>
    is属性的使用

### $ref
    this.$ref.data内的数据(可以访问)
