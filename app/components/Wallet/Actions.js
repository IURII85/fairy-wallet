// @flow
import React, { Component } from 'react';
import ActionsHistory from '../../containers/Wallet/Actions/History';
import ActionTransfer from '../../containers/Wallet/Actions/Transfer';
import ActionDelegate from '../../containers/Wallet/Actions/Delegate';
import ActionUndelegate from '../../containers/Wallet/Actions/Undelegate';
import ActionRam from '../../containers/Wallet/Actions/Ram';
import ActionVote from '../../containers/Wallet/Actions/Vote';
import ActionSettings from '../../containers/Wallet/Actions/Settings';

type Props = {
  activeItem: string,
  actions: {}
};

export default class Actions extends Component<Props> {
  props: Props;

  render() {
    const { activeItem, actions } = this.props;

    const panes = {
      history: <ActionsHistory actions={actions} />,
      transfer: <ActionTransfer actions={actions} />,
      delegate: <ActionDelegate actions={actions} />,
      undelegate: <ActionUndelegate actions={actions} />,
      ram: <ActionRam actions={actions} />,
      voting: <ActionVote actions={actions} />,
      settings: <ActionSettings actions={actions} />
    };

    return (
        panes[activeItem]
    );
  }
}
