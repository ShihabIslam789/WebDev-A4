import React, {component} from "react";

class AccountBalance extends component {
    render() {
        return{
            <div className= "balance font-link"> 
            Balance: {this.props.AccountBalance}
            </div>
        };
    }
}

export default AccountBalance;