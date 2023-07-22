import React, { useState } from "react";
import Styled from "./Mytable.module.css";
import { accountsData } from "./sjondata";

const MyTable = ({ data }) => {
  const [expandedAccounts, setExpandedAccounts] = useState([]);

  const handleToggleExpand = (accountId) => {
    setExpandedAccounts((prevExpanded) =>
      prevExpanded.includes(accountId)
        ? prevExpanded.filter((id) => id !== accountId)
        : [...prevExpanded, accountId]
    );
  };

  return (
    <table className={Styled.table}>
      <thead>
        <tr>
          <th>Account Name</th>
          <th>Current</th>
          <th>Previous</th>
        </tr>
      </thead>
      <tbody>
        {data.map((account) => (
          <React.Fragment key={account.accountId}>
            <tr
              className={
                expandedAccounts.includes(account.accountId)
                  ? Styled.expandedRow
                  : Styled.collapsedRow
              }
              onClick={() => handleToggleExpand(account.accountId)}
            >
              <td>{account.account_name}</td>
              <td>{account.current}</td>
              <td>{account.previous}</td>
            </tr>
            {expandedAccounts.includes(account.accountId) &&
              account.children &&
              account.children.length > 0 && (
                <tr>
                  <td colSpan={3}>
                    <MyTable data={account.children} />
                  </td>
                </tr>
              )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
