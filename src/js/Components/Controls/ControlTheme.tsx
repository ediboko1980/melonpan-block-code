import { Div } from "utils/components";
import { addPrefix } from "utils/tools/addPrefix";
import { pr } from "utils/data/plugin";
import { themes, Theme } from "utils/data/themes";

import ReactSelect from "react-select";
import { ValueType } from "react-select/src/types";

const { __ } = wp.i18n;
const { BaseControl } = wp.components;
const { useState } = wp.element;

export const ControlTheme: React.ComponentType<BlockPropsEdit> = props => {
	const { attributes, setAttributes } = props;
	const { theme } = attributes;
	const [selected, setSelected] = useState(
		themes.find(({ value }) => value === theme)
	);

	return (
		<Div classes="control-container">
			<BaseControl
				id={addPrefix("control-theme")}
				label={__("Color theme")}
				help={__("Choose a theme for the syntax highlight.")}
				className={addPrefix("control")}
			>
				<ReactSelect
					className={addPrefix("control-react_select")}
					classNamePrefix={pr}
					value={selected}
					onChange={(selected: ValueType<Theme>) => {
						if (!selected) {
							return;
						}

						selected = selected as Theme;

						setAttributes({ theme: selected.value });
						setSelected(selected);
					}}
					options={themes}
					placeholder={__("Select a theme")}
				/>
			</BaseControl>
		</Div>
	);
};
