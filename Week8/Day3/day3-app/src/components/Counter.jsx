const Counter = ({ (props) => {
    console.log('Counter=>' ,props);
    
    return (
        <>
            <h2>My Counter</h2>
            Counts: {props.count}<button> + </button>
            </>

    );
};
export default Counter;