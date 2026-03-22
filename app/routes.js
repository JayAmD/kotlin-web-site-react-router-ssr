import { index, layout } from "@react-router/dev/routes";

export default [
    layout("routes/site-layout.jsx", [
        index("routes/home.jsx")
    ])
];
