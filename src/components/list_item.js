import React, { Component } from 'react';
import {
	Text,
	TouchableWithoutFeedback,
	View,
	LayoutAnimation,
	UIManager
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	componentWillUpdate() {
		if (UIManager.setLayoutAnimationEnabledExperimental) {
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
		LayoutAnimation.spring();
	}

	renderDescription() {
		const { library, expanded } = this.props;
		if (expanded) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>
						{library.description}
					</Text>
				</CardSection>
			);
		}
		return null;
	}

	render() {
		const { title, id } = this.props.library;
		const { titleStyle } = styles;
		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>{title}</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

//ownProps === ListItem.props ? true
const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
