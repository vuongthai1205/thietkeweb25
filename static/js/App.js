import Logo from "./assets/img/superchina-logo.png";
import Telegram from "./assets/img/telegram.svg";
import Twitter from "./assets/img/twitter.svg";
import Dex from "./assets/img/dex.svg";
import Chart from "./assets/img/chart.svg";
import Uniswap from "./assets/img/uniswap.svg";
import "./App.scss";

function App() {
    return ( <
        div className = "app" >
        <
        ul className = "menu" >
        <
        li >
        <
        a > 主页 < /a> <
        /li> <
        li >
        <
        a > NFT < /a> <
        /li> <
        li >
        <
        a > 关于 < /a> <
        /li> <
        /ul> <
        div className = "logo" >
        <
        img src = {
            Logo
        }
        alt = "logo" / >
        <
        /div> <
        h4 className = "title" > SUPERCHINA < /h4> <
        p className = "description" >
        SUPERCHINA 是一个创新项目， 推出了一种全新的 ERC20 代币， 以迎合中国快速发展和辉煌成就的潮流。 秉持与中国政府政策保持一致的理念， 该项目致力于为中国持续增长的故事贡献力量， 并成为其繁荣未来的重要组成部分。 团队已经实施了创新的功能和机制， 以确保项目的成功。 其中包括通缩的代币模型、 代币销毁以及奖励的重新分配， 以激励长期持有和社区参与。 此外， 该项目还整合了区块链技术， 为MEME币生态系统提供透明性、 安全性和不可变性。 <
        /p> <
        a className = "btn-buy"
        href = "#"
        target = "_blank"
        rel = "noopener noreferrer" >
        BUY $SPCN <
        /a> <
        ul className = "tokenomics" >
        <
        li >
        <
        span > 象征 < /span> <
        span > $SPCN < /span> <
        /li> <
        li >
        <
        span > 税 < /span> <
        span > 0 / 0 < /span> <
        /li> <
        li >
        <
        span > 供应 < /span> <
        span > 100 M < /span> <
        /li> <
        /ul> <
        ul className = "social" >
        <
        li >
        <
        a href = "https://t.me/SuperChina"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img src = {
            Telegram
        }
        alt = "social" / >
        <
        /a> <
        /li> <
        li >
        <
        a href = "https://twitter.com/SuperChinaETH"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img src = {
            Twitter
        }
        alt = "social" / >
        <
        /a> <
        /li> <
        li >
        <
        a href = "#"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img src = {
            Dex
        }
        alt = "social" / >
        <
        /a> <
        /li> <
        li >
        <
        a href = "#"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img src = {
            Chart
        }
        alt = "social" / >
        <
        /a> <
        /li> <
        li >
        <
        a href = "#"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img src = {
            Uniswap
        }
        alt = "social" / >
        <
        /a> <
        /li> <
        /ul> <
        span className = "copyright" > @SUPERCHINA 2023 < /span> <
        /div>
    );
}

export default App;