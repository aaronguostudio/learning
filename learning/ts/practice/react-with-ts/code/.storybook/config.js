import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import '../src/index.css'

// automatically import all files ending in *.stories.js
configure(requireContext('../src', true, /\.stories\.js$/), module);
