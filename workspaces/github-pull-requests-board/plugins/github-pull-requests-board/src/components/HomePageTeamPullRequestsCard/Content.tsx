/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import { useTeamPullRequestsContext } from './Context';
import { EntityTeamPullRequestsCard } from '../EntityTeamPullRequestsCard';
import Typography from '@material-ui/core/Typography';
import { EntityProvider } from '@backstage/plugin-catalog-react';

export const Content = () => {
  const { entity } = useTeamPullRequestsContext();

  if (!entity) {
    return (
      <Typography variant="body1">
        Please select a team to view pull requests for
      </Typography>
    );
  }

  return (
    <EntityProvider entity={entity}>
      <EntityTeamPullRequestsCard />
    </EntityProvider>
  );
};
