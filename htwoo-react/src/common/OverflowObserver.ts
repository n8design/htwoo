
export interface IOverflowItem {
  child: HTMLElement;
  ref: string;
  width: number;
  overallWidth: number;
}

export interface IOverflowResizer {
  InstanceId: string;
  ObserveElement: HTMLElement;
  OverflowChangedEvent: Function;
}

export class OverflowResizer implements IOverflowResizer {
  private LOG_SOURCE: string = "💦OverflowResizer";
  private _instanceId: string;
  private _resizeObserver: ResizeObserver;
  private _resizeContainer: HTMLElement;
  private _overflowChangedEvent: (overflow: boolean) => void;
  private _timeOutId: any;
  private _clientWidth: number;

  private _overflowItems: IOverflowItem[] = [];

  constructor(instanceId: string) {
    this._instanceId = instanceId;
    this._resizeObserver = new ResizeObserver(this._resizeObserverHandler);
  }

  public get InstanceId(): string {
    return this._instanceId;
  }

  public set ObserveElement(value: HTMLElement) {
    this._resizeContainer = value;
    this._resizeObserver.observe(value, { box: "border-box" });
  }

  public set OverflowChangedEvent(value: (overflow: boolean) => void) {
    this._overflowChangedEvent = value;
  }

  private _resizeObserverHandler: ResizeObserverCallback = () => {
    try {
      if (this._resizeContainer.parentElement.clientWidth > 0) {
        this._debounceResize(this._resize, 100);
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_resizeObserverHandler) - ${err}`);
    }
  }

  private _resize = () => {
    try {
      this._initOverflowElements(this._resizeContainer.children);
      this._entryHandler();
    } catch (err) {
      console.error(this.LOG_SOURCE, "(_resize)", err);
    }
  }

  private _debounceResize = (fn: () => void, delay: number): void => {
    try {
      if (this._timeOutId) {
        clearTimeout(this._timeOutId);
      }
      this._timeOutId = setTimeout(() => {
        fn();
      }, delay);
    } catch (err) {
      console.error(`err - ${this.LOG_SOURCE} (_debounceResize)`);
    }
  }

  private _initOverflowElements = (children) => {
    try {
      if (this._overflowItems.length < children.length) {
        this._overflowItems = [];
        let overallWidth = 0;
        for (let i = 0; i < children.length; i++) {
          overallWidth += children[i].clientWidth;
          if (!children[i].classList.contains("hoo-buttonicon-overflow")) {
            let currentItem = {
              child: children[i],
              ref: `ref-${this._instanceId}-${i}`,
              width: children[i].clientWidth,
              overallWidth: overallWidth
            };
            children[i].dataset.ref = currentItem.ref;
            this._overflowItems.push(currentItem);
          }
        }
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_initOverflowElements) - ${err}`);
    }
  }

  private _entryHandler = () => {
    try {
      this._getOverflowItems();
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_entryHandler) - ${err}`);
    }

  }

  private _getOverflowItems = () => {
    try {
      const defaultOffset = 32;
      const targetWidth = this._resizeContainer.parentElement.clientWidth;

      let curOverFlowItems = this._overflowItems.filter(item => {
        return item.overallWidth > targetWidth - defaultOffset;
      });

      let curItems = this._overflowItems.filter(item => {
        return item.overallWidth < targetWidth - defaultOffset;
      });

      const overflowControl = this._resizeContainer.querySelector('.hoo-buttonicon-overflow .hoo-buttonflyout');
      if (overflowControl != null) {
        // Moves the Element into a new list item with all Events attached
        if (overflowControl.children.length < curOverFlowItems.length) {
          for (let i = 0; i < curOverFlowItems.length; i++) {
            if (this._resizeContainer.querySelector(`[data-ref=${curOverFlowItems[i].ref}]`) !== null) {
              const listItem = document.createElement('li');
              const overflow = this._resizeContainer.querySelector(`[data-ref=${curOverFlowItems[i].ref}]`);
              listItem.appendChild(overflow);
              overflowControl.appendChild(listItem);
            }
          }
        }

        // Move elements back from overflow menu
        if (overflowControl.children.length > curOverFlowItems.length) {
          for (let i = 0; i < curItems.length; i++) {
            if (overflowControl.querySelector(`[data-ref=${curItems[i].ref}]`) !== null) {
              let overflowElement = overflowControl.querySelector(`[data-ref=${curItems[i].ref}]`);
              this._resizeContainer.appendChild(overflowElement);
            }
          }
        }

        // Cleanup left over <li> elements
        for (let i = 0; i < overflowControl.children.length; i++) {
          if (overflowControl.children[i].children.length === 0) {
            overflowControl.children[i].remove();
          }
        }

        //Trigger parent container to refresh overflow if state has changed
        this._overflowChangedEvent(overflowControl.children.length > 0);
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_getOverflowItems) - ${err}`);
    }
  }
}