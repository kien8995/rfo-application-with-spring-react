import React, {PropTypes} from "react";

import {DealerForm} from "./DealerForm";
import {DealerTable} from "./DealerTable";

const Dealer = ({
    dealer,
    dealers,
    onDealerChange
}) => {

    if (dealers.length > 0 && (dealer.dealerList.length === 0 && dealer.applicableDealers.length === 0)) {
        dealer.dealerList = dealers.map(dealer => {
            return Object.assign({}, dealer);
        });
    }

    let onTextChange = (event) => {
        let object = {};
        object[event.target.name] = event.target.value;
        onDealerChange(object);
    };

    let onDealersRowSelected = (key) => {
        dealer.applicableDealers.push(dealer.dealerList[key[0]]);
        dealer.dealerList.splice(key[0], 1);

        onDealerChange({
            applicableDealers: dealer.applicableDealers,
            dealerList: dealer.dealerList
        });
    };

    let onApplicableDealersRowSelected = (key) => {
        dealer.dealerList.push(dealer.applicableDealers[key[0]]);
        dealer.applicableDealers.splice(key[0], 1);

        onDealerChange({
            applicableDealers: dealer.applicableDealers,
            dealerList: dealer.dealerList
        });
    };

    let onButtonSearchClick = () => {

        let list = dealers.filter((d) => {
            return (
                (dealer.dealerCode === "" || d.dealerCode.indexOf(dealer.dealerCode) !== -1) &&
                (dealer.dealerName === "" || d.dealerName.indexOf(dealer.dealerName) !== -1)
            );
        });
        
        onDealerChange({ dealerList: list });
    };

    return (
        <div>
            <DealerForm
                dealerCode={dealer.dealerCode}
                dealerName={dealer.dealerName}
                onTextChange={onTextChange}
                onButtonSearchClick={onButtonSearchClick} />

            <DealerTable
                dealers={dealer.dealerList}
                applicableDealers={dealer.applicableDealers}
                onDealersRowSelected={onDealersRowSelected}
                onApplicableDealersRowSelected={onApplicableDealersRowSelected} />
        </div>
    );
};

Dealer.propTypes = {
    onDealerChange: PropTypes.func.isRequired,
    dealers: PropTypes.array.isRequired,
    dealer: PropTypes.object.isRequired
};

export default Dealer;