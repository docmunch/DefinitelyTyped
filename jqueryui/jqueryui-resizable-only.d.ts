// Type definitions for jQueryUI 1.9
// Project: http://jqueryui.com/
// ONLY THE RESIZABLE INTERFACE


/// <reference path="../jquery/jquery.d.ts"/>

declare module JQueryUI {
    // Resizable //////////////////////////////////////////////////

    interface ResizableOptions {
        alsoResize?: any; // Selector, JQuery or Element
        animate?: boolean;
        animateDuration?: any; // number or string
        animateEasing?: string;
        aspectRatio?: any; // boolean or number
        autoHide?: boolean;
        cancel?: string;
        containment?: any; // Selector, Element or string
        delay?: number;
        disabled?: boolean;
        distance?: number;
        ghost?: boolean;
        grid?: any;
        handles?: any; // string or object
        helper?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
    }

    interface ResizableUIParams {
        element: JQuery;
        helper: JQuery;
        originalElement: JQuery;
        originalPosition: any;
        originalSize: any;
        position: any;
        size: any;
    }

    interface ResizableEvent {
        (event: Event, ui: ResizableUIParams): void;
    }

    interface ResizableEvents {
        resize?: ResizableEvent;
        start?: ResizableEvent;
        stop?: ResizableEvent;
    }

    interface Resizable extends Widget, ResizableOptions, ResizableEvents {
    }

    // Widget //////////////////////////////////////////////////

    interface WidgetOptions {
        disabled?: boolean;
        hide?: any;
        show?: any;
    }

    interface Widget {
        (methodName: string): JQuery;
        (options: WidgetOptions): JQuery;
        (optionLiteral: string, optionName: string): any;
        (optionLiteral: string, options: WidgetOptions): any;
        (optionLiteral: string, optionName: string, optionValue: any): JQuery;

        (name: string, prototype: any): JQuery;
        (name: string, base: Function, prototype: any): JQuery;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////
}

interface JQuery {
    resizable(): JQuery;
    resizable(methodName: string): JQuery;
    resizable(methodName: 'destroy'): void;
    resizable(methodName: 'disable'): void;
    resizable(methodName: 'enable'): void;
    resizable(methodName: 'widget'): JQuery;
    resizable(options: JQueryUI.ResizableOptions): JQuery;
    resizable(optionLiteral: string, optionName: string): any;
    resizable(optionLiteral: string, options: JQueryUI.ResizableOptions): any;
    resizable(optionLiteral: string, optionName: string, optionValue: any): JQuery;
}