import React from "react";
import { connect } from "react-redux";
import { useIntl } from "react-intl";
import {
  Card,
  Radio,
  Menu,
  Dropdown,
  Input,
  Button,
  Icon,
} from "semantic-ui-react";

import "./style.sass";

import PageWithHeader from "../../containers/pageWithHeader";
import ThemeStyle from "../../constants/themingStyles";
import { languageOptions } from "../../constants/settingsConstants";

const SettingsPageComponent = ({
  isDark,
  handleChangeTheme,
  handleChangeLanguage,
  language,
  handleReset,
  isContactDataChangeShow,
  isPasswordChangeShow,
  handleOpenPasswordChange,
  theme,
  ...props
}) => {
  const {
    messages: { titles, settings },
  } = useIntl();

  const chevronStyle = {
    transform: `rotate(${isPasswordChangeShow ? 180 : 0}deg)`,
  };

  const contentStyle = {
    maxHeight: `${isPasswordChangeShow ? 300 : 0}px`,
  };

  return (
    <PageWithHeader title={titles.settings} {...props}>
      <div className="settingsBody">
        <div className="settingsItem">
          <Card fluid style={ThemeStyle[theme]}>
            <Card.Content>
              <div id="theme">
                <p>{settings.theme}</p>

                <Radio slider checked={isDark} onChange={handleChangeTheme} />
              </div>
            </Card.Content>
          </Card>
        </div>

        <div className="settingsItem">
          <Card fluid style={ThemeStyle[theme]}>
            <Card.Content>
              <div>
                <div
                  className="passwordChangeHeader"
                  onClick={handleOpenPasswordChange}>
                  <p>{settings.password}</p>

                  <div className="chevronIcon" style={chevronStyle}>
                    <Icon name="chevron down"></Icon>
                  </div>
                </div>

                <div className="passwordChange" style={contentStyle}>
                  <div className="passwordChange-input">
                    <Input
                      size="small"
                      fluid
                      placeholder={settings.enterPasswordPlaceholder}
                    />
                  </div>

                  <div className="passwordChange-input">
                    <Input
                      size="small"
                      fluid
                      placeholder={settings.repeatPasswordPlaceholder}
                    />
                  </div>

                  <div className="passwordChange-button">
                    <Button>{settings.savePassword}</Button>
                  </div>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>

        <div className="settingsItem">
          <Card fluid style={ThemeStyle[theme]}>
            <Card.Content>
              <div id="language">
                <p>{settings.language}</p>

                <Menu compact>
                  <Dropdown
                    options={languageOptions}
                    value={language}
                    onChange={handleChangeLanguage}
                    simple
                    item
                  />
                </Menu>
              </div>
            </Card.Content>
          </Card>
        </div>

        <div className="settingsItem">
          <Card fluid style={ThemeStyle[theme]}>
            <Card.Content>
              <div>
                <div className="passwordChangeHeader">
                  <p>{settings.userData}</p>

                  <div className="chevronIcon">
                    <Icon name="chevron down"></Icon>
                  </div>
                </div>

                <div></div>
              </div>
            </Card.Content>
          </Card>
        </div>

        <div className="settingsItem">
          <Card fluid style={ThemeStyle[theme]}>
            <Card.Content>
              <div id="reset">
                <p>{settings.reset}</p>

                <div>
                  <Button onClick={handleReset}>{settings.resetButton}</Button>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </PageWithHeader>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  language: state.language.language,
});

export default connect(
  mapStateToProps,
  null
)(React.memo(SettingsPageComponent));
