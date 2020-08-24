
import { getAllAccountSummaryBalanceData} from "../../redux/actions/DashboardData"

export const mapStateToProps = state => {
  return {
TransactionData:state.dashboardReducer
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getAllAccountSummaryBalanceData: () => dispatch(getAllAccountSummaryBalanceData()),
  };   
};