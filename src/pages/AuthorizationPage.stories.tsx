import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { AuthorizationPage } from './AuthorizationPage'

export default {
	title: 'Pages/AuthorizationPage',
	component: AuthorizationPage,
	parameters: {
		layout: 'fullscreen',
	},
} as Meta

const Template: StoryFn = args => <AuthorizationPage {...args} />

export const Default = Template.bind({})
Default.args = {}
