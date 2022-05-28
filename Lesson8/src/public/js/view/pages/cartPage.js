const ProductEl = {
    props: ['id'],
    mounted() {
        console.log();
    },
    template: `
    <div>
        <headercomp ref="headercomp"></headercomp>
        <cartEl></cartEl>     
        <footercomp></footercomp>
    </div>
`
};
export default ProductEl;