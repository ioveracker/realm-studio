////////////////////////////////////////////////////////////////////////////
//
// Copyright 2018 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { TableHeaderProps } from 'react-virtualized';

import { RealmSizeHeader } from './RealmSizeHeader';

// @see https://github.com/bvaughn/react-virtualized/blob/9.18.5/source/Table/defaultHeaderRenderer.js

interface IRealmSizeHeaderContainerState {
  isPopoverOpen: boolean;
  labelElement?: HTMLElement;
}

class RealmSizeHeaderContainer extends React.Component<
  TableHeaderProps,
  IRealmSizeHeaderContainerState
> {
  public state: IRealmSizeHeaderContainerState = {
    isPopoverOpen: false,
  };

  public render() {
    return (
      <RealmSizeHeader
        isPopoverOpen={this.state.isPopoverOpen}
        label={this.props.label}
        labelElement={this.state.labelElement}
        onLabelRef={this.onLabelRef}
        onTogglePopover={this.onTogglePopover}
      />
    );
  }

  protected onLabelRef = (labelElement: HTMLElement) => {
    this.setState({ labelElement });
  };

  protected onTogglePopover = () => {
    this.setState({ isPopoverOpen: !this.state.isPopoverOpen });
  };
}

export { RealmSizeHeaderContainer as RealmSizeHeader };
