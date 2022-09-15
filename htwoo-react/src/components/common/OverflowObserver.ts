
export interface IOverflowItem {
  child: HTMLElement;
  ref: string;
  width: number;
  overallWidth: number;
}

export interface IOverflowResizer {
  InstanceId: string;
  ObserveElement: HTMLElement;
}

export class OverflowResizer implements IOverflowResizer {
  private LOG_SOURCE: string = "🔶OverflowResizer";
  private _instanceId: string;
  private _resizeObserver: ResizeObserver;
  private _resizeContainer: HTMLElement;

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

  private _resizeObserverHandler: ResizeObserverCallback = () => {
    try {
      this._initOverflowElements(this._resizeContainer.children);
      this._entryHandler();
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_resizeObserverHandler) - ${err}`);
    }
  }

  private _initOverflowElements = (children) => {
    try {
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
      const overflowButton = this._resizeContainer.querySelector('hoo-buttonicon-overflow');
      // const defaultOffset = overflowButton?.clientHeight || 40;
      const defaultOffset = 40;
      const targetWidth = this._resizeContainer.parentElement.clientWidth;
      let curOverFlowItems = this._overflowItems.filter(item => {
        return item.overallWidth > targetWidth - defaultOffset;
      });

      let curItems = this._overflowItems.filter(item => {
        return item.overallWidth < targetWidth - defaultOffset;
      });

      let overflowControl = this._resizeContainer.querySelector('.hoo-buttonicon-overflow .hoo-buttonflyout');

      // Moves the Element into a new list item with all Events attached
      if (overflowControl && overflowControl.children.length < curOverFlowItems.length) {
        for (let i = 0; i < curOverFlowItems.length; i++) {
          if (this._resizeContainer.querySelector("[data-ref=" + curOverFlowItems[i].ref + "]") !== null) {
            let listItem = document.createElement('li');
            const overflow = this._resizeContainer.querySelector("[data-ref=" + curOverFlowItems[i].ref + "]");
            overflow.setAttribute("aria-hidden", "true");
            listItem.appendChild(overflow);
            overflowControl.appendChild(listItem);
          }
        }
      }

      let buttonEnabled: HTMLElement = null;
      if (overflowControl.children.length !== 0) {
        buttonEnabled = overflowControl.closest('.hoo-buttonicon-overflow');
        if (buttonEnabled) {
          buttonEnabled.classList.add('is-active');
        }
      } else {
        buttonEnabled = overflowControl.closest('.hoo-buttonicon-overflow');
        if (buttonEnabled) {
          buttonEnabled.classList.remove('is-active');
        }
      }

      // Move elements back from overflow menu
      if (overflowControl && overflowControl.children.length > curOverFlowItems.length) {
        for (let i = 0; i < curItems.length; i++) {
          if (overflowControl.querySelector("[data-ref=" + curItems[i].ref + "]") !== null) {
            let overflowElement = overflowControl.querySelector("[data-ref=" + curItems[i].ref + "]");
            overflowElement.removeAttribute("aria-hidden");
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
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_getOverflowItems) - ${err}`);
    }
  }
}