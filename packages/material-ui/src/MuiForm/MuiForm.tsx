import { withTheme, FormProps } from '@stakater/fs-core';

import Theme from '../Theme';
import { StatelessComponent } from 'react';

const MuiForm: React.ComponentClass<FormProps<any>> | StatelessComponent<FormProps<any>>  = withTheme(Theme);

export default MuiForm;
