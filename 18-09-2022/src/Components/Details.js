const Details = (props) => {
    return(
        <div className="margin-left">
            
            <table>
                <tr className="chBac">
                    <td>PROPERTY</td>
                    <td>DATE</td>
                    <td>RENT</td>
                    <td>DEPOSIT</td>
                    <td>STATUS </td>
                </tr>
                <tr>
                <td>NILVI</td>
                    <td>12 February 2020</td>
                    <td>$30000</td>
                    <td>$90000</td>
                    <td>pending &nbsp;&emsp; </td>
                    <td className={`${props.yl}`}>  </td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>01 September2019</td>
                    <td>$50000</td>
                    <td>$7000</td>
                    <td>Paid&nbsp;&emsp; </td>
                    <td className={`${props.gr}`}>  </td>
                </tr>
            </table>
            <button>SUBMIT</button>
        </div>
    )
}
export default Details;
