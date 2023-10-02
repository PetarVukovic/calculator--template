export const TableView = (props) => {
    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((yearlyData) => (
                    <tr key={yearlyData.year}>
                        <td>{yearlyData.year}</td>
                        <td>{yearlyData.savingsEndOfYear}</td>
                        <td>{yearlyData.yearlyInterest}</td>
                        <td>{
                            yearlyData.savingsEndOfYear - props.initialValue - yearlyData.yearlyContribution * yearlyData.year}
                        </td>
                        <td>{props.initialValue - yearlyData.yearlyContribution * yearlyData.year}</td>
                    </tr>

                ))}

            </tbody>
        </table>
    )
}