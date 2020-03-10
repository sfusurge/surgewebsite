import React from "react";
import {Helmet} from "react-helmet";

class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Parent>
                <Helmet>
                    <title>SFU Surge</title>
                    <meta name="description" content="Helmet application" />
                </Helmet>

                <Child>
                    <Helmet>
                        <title>About Surge</title>
                        <meta name="description" content="Nested component" />
                    </Helmet>
                </Child>
                
                <Child>
                    <Helmet>
                        <title>Project Hub</title>
                        <meta name="description" content="Nested component" />
                    </Helmet>
                </Child>
            </Parent>
        </div>
    );
  }
};