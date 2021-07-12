import sizes from "./sizes"
import chroma from "chroma-js"

const styles = {
    root: {
        width: "20%",
        height: "25%",  
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-6.25px",
        "&:hover svg":{
            color: "white",
            transfrom: "scale(1.5)"
        },
        [sizes.down("lg")]:{
            width: "25%",
            height: "20%"
        },
        [sizes.down("md")]:{
            width: "50%",
            height: "10%"
        },
        [sizes.down("sm")]:{
            width: "100%",
            height: "5%"
        }
    },
    boxContent:{
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0px",
        bottom: "0px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        color: props => chroma(props.color).luminance() <= 0.08 ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.6)",
        justifyContent: "space-between"
    },
    deleteIcon:{
        transition: "all 0.3s ease-in-out"
    }
};

export default styles;