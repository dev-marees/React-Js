import React, { useState, useCallback, useEffect } from "react";
import "../style/context.css";

function Context() {
    return (
        <div className="theme-app" data-theme="light">
            <div className="theme-container">

                <div className="theme-header">
                    <h1 className="theme-title">Theme Switcher</h1>
                    <label className="theme-switch">
                        <input type="checkbox" className="theme-switch-input" />
                        <span className="theme-slider">
                            <span className="theme-slider-icon sun">☀️</span>
                            <span className="theme-slider-icon moon">🌙</span>
                        </span>
                    </label>
                </div>

                <div className="theme-card">
                    <h2 className="theme-card-title">Current Theme</h2>
                    <p className="theme-card-text">
                        This card and the whole page restyle automatically based on the
                        <strong> data-theme </strong> value on the wrapper.
                    </p>
                    <button className="theme-btn">Sample Button</button>
                </div>

            </div>
        </div>
    );
}

export default Context;
