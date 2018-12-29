import * as React from 'react';
import './styles.scss';
export interface CheckboxProps extends React.HTMLProps<HTMLButtonElement> {
    component?: string;
    primary?: boolean;
    warning?: boolean;
}
export interface CheckboxState {
    checked: boolean;
}
declare class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    render(): React.DOMElement<{
        component?: string;
        accept?: string;
        acceptCharset?: string;
        action?: string;
        allowFullScreen?: boolean;
        allowTransparency?: boolean;
        alt?: string;
        as?: string;
        async?: boolean;
        autoComplete?: string;
        autoFocus?: boolean;
        autoPlay?: boolean;
        capture?: string | boolean;
        cellPadding?: React.ReactText;
        cellSpacing?: React.ReactText;
        charSet?: string;
        challenge?: string;
        checked?: boolean;
        cite?: string;
        classID?: string;
        cols?: number;
        colSpan?: number;
        content?: string;
        controls?: boolean;
        coords?: string;
        crossOrigin?: string;
        data?: string;
        dateTime?: string;
        default?: boolean;
        defer?: boolean;
        disabled?: boolean;
        download?: any;
        encType?: string;
        form?: string;
        formAction?: string;
        formEncType?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;
        frameBorder?: React.ReactText;
        headers?: string;
        height?: React.ReactText;
        high?: number;
        href?: string;
        hrefLang?: string;
        htmlFor?: string;
        httpEquiv?: string;
        integrity?: string;
        keyParams?: string;
        keyType?: string;
        kind?: string;
        label?: string;
        list?: string;
        loop?: boolean;
        low?: number;
        manifest?: string;
        marginHeight?: number;
        marginWidth?: number;
        max?: React.ReactText;
        maxLength?: number;
        media?: string;
        mediaGroup?: string;
        method?: string;
        min?: React.ReactText;
        minLength?: number;
        multiple?: boolean;
        muted?: boolean;
        name?: string;
        nonce?: string;
        noValidate?: boolean;
        open?: boolean;
        optimum?: number;
        pattern?: string;
        placeholder?: string;
        playsInline?: boolean;
        poster?: string;
        preload?: string;
        readOnly?: boolean;
        rel?: string;
        required?: boolean;
        reversed?: boolean;
        rows?: number;
        rowSpan?: number;
        sandbox?: string;
        scope?: string;
        scoped?: boolean;
        scrolling?: string;
        seamless?: boolean;
        selected?: boolean;
        shape?: string;
        size?: number;
        sizes?: string;
        span?: number;
        src?: string;
        srcDoc?: string;
        srcLang?: string;
        srcSet?: string;
        start?: number;
        step?: React.ReactText;
        summary?: string;
        target?: string;
        type?: string;
        useMap?: string;
        value?: string | number | string[];
        width?: React.ReactText;
        wmode?: string;
        wrap?: string;
        defaultChecked?: boolean;
        defaultValue?: string | string[];
        suppressContentEditableWarning?: boolean;
        suppressHydrationWarning?: boolean;
        accessKey?: string;
        contentEditable?: boolean;
        contextMenu?: string;
        dir?: string;
        draggable?: boolean;
        hidden?: boolean;
        id?: string;
        lang?: string;
        slot?: string;
        spellCheck?: boolean;
        style?: React.CSSProperties;
        tabIndex?: number;
        title?: string;
        inputMode?: string;
        is?: string;
        radioGroup?: string;
        role?: string;
        about?: string;
        datatype?: string;
        inlist?: any;
        prefix?: string;
        property?: string;
        resource?: string;
        typeof?: string;
        vocab?: string;
        autoCapitalize?: string;
        autoCorrect?: string;
        autoSave?: string;
        color?: string;
        itemProp?: string;
        itemScope?: boolean;
        itemType?: string;
        itemID?: string;
        itemRef?: string;
        results?: number;
        security?: string;
        unselectable?: "on" | "off";
        'aria-activedescendant'?: string;
        'aria-atomic'?: boolean | "false" | "true";
        'aria-autocomplete'?: "list" | "none" | "inline" | "both";
        'aria-busy'?: boolean | "false" | "true";
        'aria-checked'?: boolean | "false" | "true" | "mixed";
        'aria-colcount'?: number;
        'aria-colindex'?: number;
        'aria-colspan'?: number;
        'aria-controls'?: string;
        'aria-current'?: boolean | "step" | "false" | "true" | "page" | "location" | "date" | "time";
        'aria-describedby'?: string;
        'aria-details'?: string;
        'aria-disabled'?: boolean | "false" | "true";
        'aria-dropeffect'?: "link" | "none" | "copy" | "execute" | "move" | "popup";
        'aria-errormessage'?: string;
        'aria-expanded'?: boolean | "false" | "true";
        'aria-flowto'?: string;
        'aria-grabbed'?: boolean | "false" | "true";
        'aria-haspopup'?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";
        'aria-hidden'?: boolean | "false" | "true";
        'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling";
        'aria-keyshortcuts'?: string;
        'aria-label'?: string;
        'aria-labelledby'?: string;
        'aria-level'?: number;
        'aria-live'?: "off" | "assertive" | "polite";
        'aria-modal'?: boolean | "false" | "true";
        'aria-multiline'?: boolean | "false" | "true";
        'aria-multiselectable'?: boolean | "false" | "true";
        'aria-orientation'?: "horizontal" | "vertical";
        'aria-owns'?: string;
        'aria-placeholder'?: string;
        'aria-posinset'?: number;
        'aria-pressed'?: boolean | "false" | "true" | "mixed";
        'aria-readonly'?: boolean | "false" | "true";
        'aria-relevant'?: "additions" | "additions text" | "all" | "removals" | "text";
        'aria-required'?: boolean | "false" | "true";
        'aria-roledescription'?: string;
        'aria-rowcount'?: number;
        'aria-rowindex'?: number;
        'aria-rowspan'?: number;
        'aria-selected'?: boolean | "false" | "true";
        'aria-setsize'?: number;
        'aria-sort'?: "none" | "ascending" | "descending" | "other";
        'aria-valuemax'?: number;
        'aria-valuemin'?: number;
        'aria-valuenow'?: number;
        'aria-valuetext'?: string;
        dangerouslySetInnerHTML?: {
            __html: string;
        };
        onCopy?: (event: React.ClipboardEvent<HTMLButtonElement>) => void;
        onCopyCapture?: (event: React.ClipboardEvent<HTMLButtonElement>) => void;
        onCut?: (event: React.ClipboardEvent<HTMLButtonElement>) => void;
        onCutCapture?: (event: React.ClipboardEvent<HTMLButtonElement>) => void;
        onPaste?: (event: React.ClipboardEvent<HTMLButtonElement>) => void;
        onPasteCapture?: (event: React.ClipboardEvent<HTMLButtonElement>) => void;
        onCompositionEnd?: (event: React.CompositionEvent<HTMLButtonElement>) => void;
        onCompositionEndCapture?: (event: React.CompositionEvent<HTMLButtonElement>) => void;
        onCompositionStart?: (event: React.CompositionEvent<HTMLButtonElement>) => void;
        onCompositionStartCapture?: (event: React.CompositionEvent<HTMLButtonElement>) => void;
        onCompositionUpdate?: (event: React.CompositionEvent<HTMLButtonElement>) => void;
        onCompositionUpdateCapture?: (event: React.CompositionEvent<HTMLButtonElement>) => void;
        onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
        onFocusCapture?: (event: React.FocusEvent<HTMLButtonElement>) => void;
        onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
        onBlurCapture?: (event: React.FocusEvent<HTMLButtonElement>) => void;
        onChange?: (event: React.FormEvent<HTMLButtonElement>) => void;
        onChangeCapture?: (event: React.FormEvent<HTMLButtonElement>) => void;
        onInput?: (event: React.FormEvent<HTMLButtonElement>) => void;
        onInputCapture?: (event: React.FormEvent<HTMLButtonElement>) => void;
        onReset?: (event: React.FormEvent<HTMLButtonElement>) => void;
        onResetCapture?: (event: React.FormEvent<HTMLButtonElement>) => void;
        onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
        onSubmitCapture?: (event: React.FormEvent<HTMLButtonElement>) => void;
        onInvalid?: (event: React.FormEvent<HTMLButtonElement>) => void;
        onInvalidCapture?: (event: React.FormEvent<HTMLButtonElement>) => void;
        onLoad?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onLoadCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onError?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onErrorCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
        onKeyDownCapture?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
        onKeyPress?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
        onKeyPressCapture?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
        onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
        onKeyUpCapture?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
        onAbort?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onAbortCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onCanPlay?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onCanPlayCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onCanPlayThrough?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onCanPlayThroughCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onDurationChange?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onDurationChangeCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onEmptied?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onEmptiedCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onEncrypted?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onEncryptedCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onEnded?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onEndedCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onLoadedData?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onLoadedDataCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onLoadedMetadata?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onLoadedMetadataCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onLoadStart?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onLoadStartCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onPause?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onPauseCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onPlay?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onPlayCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onPlaying?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onPlayingCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onProgress?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onProgressCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onRateChange?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onRateChangeCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onSeeked?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onSeekedCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onSeeking?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onSeekingCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onStalled?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onStalledCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onSuspend?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onSuspendCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onTimeUpdate?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onTimeUpdateCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onVolumeChange?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onVolumeChangeCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onWaiting?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onWaitingCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onClickCapture?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onContextMenuCapture?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onDoubleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onDoubleClickCapture?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onDrag?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onDragCapture?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onDragEnd?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onDragEndCapture?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onDragEnter?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onDragEnterCapture?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onDragExit?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onDragExitCapture?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onDragLeave?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onDragLeaveCapture?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onDragOver?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onDragOverCapture?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onDragStart?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onDragStartCapture?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onDrop?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onDropCapture?: (event: React.DragEvent<HTMLButtonElement>) => void;
        onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onMouseDownCapture?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onMouseMove?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onMouseMoveCapture?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onMouseOut?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onMouseOutCapture?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onMouseOver?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onMouseOverCapture?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onMouseUpCapture?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onSelect?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onSelectCapture?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
        onTouchCancel?: (event: React.TouchEvent<HTMLButtonElement>) => void;
        onTouchCancelCapture?: (event: React.TouchEvent<HTMLButtonElement>) => void;
        onTouchEnd?: (event: React.TouchEvent<HTMLButtonElement>) => void;
        onTouchEndCapture?: (event: React.TouchEvent<HTMLButtonElement>) => void;
        onTouchMove?: (event: React.TouchEvent<HTMLButtonElement>) => void;
        onTouchMoveCapture?: (event: React.TouchEvent<HTMLButtonElement>) => void;
        onTouchStart?: (event: React.TouchEvent<HTMLButtonElement>) => void;
        onTouchStartCapture?: (event: React.TouchEvent<HTMLButtonElement>) => void;
        onPointerDown?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onPointerDownCapture?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onPointerMove?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onPointerMoveCapture?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onPointerUp?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onPointerUpCapture?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onPointerCancel?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onPointerCancelCapture?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onPointerEnter?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onPointerEnterCapture?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onPointerLeave?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onPointerLeaveCapture?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onPointerOver?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onPointerOverCapture?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onPointerOut?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onPointerOutCapture?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onGotPointerCapture?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onGotPointerCaptureCapture?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onLostPointerCapture?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onLostPointerCaptureCapture?: (event: React.PointerEvent<HTMLButtonElement>) => void;
        onScroll?: (event: React.UIEvent<HTMLButtonElement>) => void;
        onScrollCapture?: (event: React.UIEvent<HTMLButtonElement>) => void;
        onWheel?: (event: React.WheelEvent<HTMLButtonElement>) => void;
        onWheelCapture?: (event: React.WheelEvent<HTMLButtonElement>) => void;
        onAnimationStart?: (event: React.AnimationEvent<HTMLButtonElement>) => void;
        onAnimationStartCapture?: (event: React.AnimationEvent<HTMLButtonElement>) => void;
        onAnimationEnd?: (event: React.AnimationEvent<HTMLButtonElement>) => void;
        onAnimationEndCapture?: (event: React.AnimationEvent<HTMLButtonElement>) => void;
        onAnimationIteration?: (event: React.AnimationEvent<HTMLButtonElement>) => void;
        onAnimationIterationCapture?: (event: React.AnimationEvent<HTMLButtonElement>) => void;
        onTransitionEnd?: (event: React.TransitionEvent<HTMLButtonElement>) => void;
        onTransitionEndCapture?: (event: React.TransitionEvent<HTMLButtonElement>) => void;
        ref?: React.Ref<HTMLButtonElement>;
        key?: React.ReactText;
        className: any;
    }, HTMLButtonElement>;
}
export default Checkbox;
