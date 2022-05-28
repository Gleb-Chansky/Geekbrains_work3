const ProductEl = {
    props: ['id'],
    mounted() {
        console.log();
    },
    template: `
    <div>
        <headercomp ref="headercomp"></headercomp>
        <productPage></productPage>     
        <footercomp></footercomp>
    </div>
`
};
export default ProductEl;