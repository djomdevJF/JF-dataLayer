class JFdataLayer {

  /**
   * Default classes to track for specific events/interactions
   * @type {Object}
   */
  constructor({
    logging = false,
    classes: {
      events = 'js-trackEvent',
      items = 'js-trackItem',
      clicks = 'js-trackClick',
      quantity = 'js-trackQuantity'
    } = {
      events: 'js-trackEvent',
      items: 'js-trackItem',
      clicks: 'js-trackClick',
      quantity: 'js-trackQuantity'
    }} = {}
  ){
    this.trackingClass = {events, items, clicks, quantity};
    this.trackingData = new WeakMap();
    this.debug = {};


    // DOM Stuff
    document.addEventListener('DOMContentLoaded', () => {
      window.dataLayer = window.dataLayer || []; // Check if dataLayer already exists
      window.eventTracking = window.eventTracking || []; // Check if eventTracking already exists

      this.setDebugger(logging);
      this.observeProducts();
      this.bindEventTracking();
    });
  }

  timeNow() {
    var d  = new Date(),
        dh = d.getHours()+'',
        dm = d.getMinutes()+'',
        ds = d.getSeconds()+'';

    dh = dh.padStart(2, '0');
    dm = dm.padStart(2, '0');
    ds = ds.padStart(2, '0');

    return (`${dh}:${dm}:${ds}`);
  }

  setDebugger(option) {
    // Setting some visual cruft for the debugger:
    let t = this.timeNow();

    this.func=`${t} ⎔ `;
    this.input='⮕ ';
    this.output=' ⮕';
    this.DOMevt=`${t} ※ `;
    this.DOMnode=`∈ `;

    if (option === undefined) return;
    if (typeof option === "boolean") {
      this.debug.enabled = option;
      this.debuggingEnabled(option);
    }
  }

  debuggingEnabled = (option) => {
    if (option === undefined) {
      return this.debug.enabled;
    }
    if (typeof option === "boolean") {
      /**
       * If the debugging is turned on, turn on our custom logging functions
       * @param  {[type]} typeof [description]
       * @return {[type]}        [description]
       */
      if (this.debug.enabled === true) {
        this.assignObj(this.debug, console)
        this.debug.info('%cJFdataLayer%c Debugging is enabled', 'background: #0066cc; border-radius: 3px; color: white; font-weight: bold; padding: 2px 5px;', '')
      } else {
        let replacement = ()=>{};
        this.assignObj(this.debug, console, replacement)
      }
    }
  };

  assignObj = (target, sources, replacement) => {
    var loopArr = [];

    loopArr.push(sources);
    if (typeof sources === 'object' && sources.length) {
      loopArr = Array.from(sources);
    }

    loopArr.forEach((source) => {
      Object.keys(source).forEach((key) => {
        target[key] = replacement === undefined ? source[key] : replacement
      })
    })
    return target
  };

  /**
   * Creates a dataLayer valid object that has a different structure based on
   * the trackingType that is passed in.
   * @param  {String} trackingType The type of event being tracked
   * @param  {Object} eventGroup   The object of data related to the event
   * @param  {Number} index        An optional index used as a product reference
   * @return {Object}              A fully constructed dataLayer object
   */
  createDataLayer = (trackingType, eventGroup, index) => {
    this.debug.groupCollapsed(`${this.func}createDataLayer(…)`);

    this.debug.groupCollapsed(`${this.input}parameters`);
      this.debug.info('trackingType:', `'${trackingType}'`);
      this.debug.info('%s %O', 'eventGroup:', eventGroup);
      this.debug.info('index', index);
    this.debug.groupEnd(`${this.input}parameters`);

    if (trackingType === null) {
      this.debug.warn('trackingType', trackingType)
      return false;
    }
    if (typeof index === 'undefined') {
      this.debug.info(trackingType, eventGroup, index, `index was 'undefined' so was set to '0'`)
      index = 0;
    }
    if (index === 'customEvent') {
      this.debug.info(index, `index was 'customEvent'`)
      customTrigger = true;
      index = 0;
    }

    let customTrigger = false,
        ecommerceObj = {'ecommerce': {}},
        label,
        eventObj = {};

    if (!customTrigger) {
      label = !!eventGroup.data.label ? eventGroup.data.label : document.title;
      eventObj = {
        'event': trackingType,
        'eventCategory': eventGroup.data.category,
        'eventAction': eventGroup.data.action,
        'eventLabel': eventGroup.data.label
      }
    }

    /**
     * Product Impression (A product is visible in the viewport)
     */
    if (trackingType === 'checkout') {
      Object.assign(ecommerceObj.ecommerce, {
        'checkout': {
          'actionField': {'step': eventGroup.data.step},
          'products': eventGroup.products
        }
      })
    }

    /**
     * Product Impression (Product/s are purchased)
     */
    if (trackingType === 'purchase') {
      Object.assign(ecommerceObj.ecommerce, {
        'purchase': {
          'actionField': {
            'id': eventGroup.data.id,
            'affiliation': eventGroup.data.affiliation,
            'revenue': eventGroup.data.revenue,
            'tax': eventGroup.data.tax,
            'shipping': eventGroup.data.shipping,
            'coupon': eventGroup.data.coupon
          },
          'products': eventGroup.products
        }
      })
    }

    /**
     * Product Impression (A product is visible in the viewport)
     */
    if (trackingType === 'productImpression') {
      Object.assign(ecommerceObj.ecommerce, {
        'currencyCode': eventGroup.data.currencyCode,
        'impressions': eventGroup.viewedProducts
      })
    }

    /**
     * Add or Remove from Cart
     */
    if (trackingType.match(/^(addToCart|removeFromCart)$/)) {
      let eventStr = (trackingType == 'addToCart' ? 'add' : 'remove');

      if (customTrigger) {
        eventObj = eventGroup.eventObj;
        Object.assign(ecommerceObj.ecommerce, {
          [eventStr]: eventGroup.productObj
        })
        customTrigger = false;
      } else {
        Object.assign(ecommerceObj.ecommerce, {
          [eventStr]: eventGroup.products[index]
        })
        Object.assign(eventObj, {
          'vigenciaPlan': eventGroup.data.vigencia
        })
      }

    }

    /**
     * Product Detail or Click (A user clicks a product or visits the product
     * detail page)
     */
    if (trackingType.match(/^(productDetail|productClick)$/)) {
      let actionStr = (trackingType == 'productDetail' ? 'detail' : 'click');
      Object.assign(ecommerceObj.ecommerce, {
        [actionStr]: {
          'actionField': {'list': eventGroup.data.list},
          'products': eventGroup.products[index]
        }
      })
    }

    /**
     * Promotion View or Click (When a user sees or interacts with a promotion)
     */
    if (trackingType.match(/^(promotionView|promotionClick)$/)){
      let eventAction = (trackingType == 'promotionView' ? 'View' : 'Click'),
          actionStr = (trackingType == 'promotionView' ? 'promoView' : 'promoClick');

      eventObj['eventAction'] = eventAction;

      Object.assign(ecommerceObj.ecommerce, {
        [actionStr]: {
          'promotions': eventGroup.promotions
        }
      })
    }

    var result = Object.assign({}, eventObj, ecommerceObj);
    this.debug.groupCollapsed(`dataLayer${this.output}`);
      this.debug.info(result);
    this.debug.groupEnd(`dataLayer${this.output}`);

    this.debug.groupEnd(`${this.func}createDataLayer`);

    return result

  };

  simplifyDataSet = (element) => {
    var newData = {}
    for (const [key, value] of Object.entries(element.dataset)) {
      if (key.startsWith('gtm')) {
        let new_key = key.replace('gtm','').toLowerCase();
        Object.defineProperty(newData, new_key, {value});
      }
    }
    return newData
  };

  createItemObj = (query) => ({
    ...query.name     && { name     : query.name     },
    ...query.id       && { id       : query.id       },
    ...query.price    && { price    : query.price    },
    ...query.brand    && { brand    : query.brand    },
    ...query.category && { category : query.category },
    ...query.variant  && { variant  : query.variant  },
    ...query.list     && { list     : query.list     },
    ...query.position && { position : query.position },
    ...query.quantity && { quantity : query.quantity },
  });

  observeProducts = () => {
    const eventDomNodes = [...document.getElementsByClassName(this.trackingClass.events)];
    const itemDomNodes = document.getElementsByClassName(this.trackingClass.items);
    this.debug.groupCollapsed(`${this.DOMnode}Nodes Found`);
      this.debug.info('%s %o', 'eventDomNodes:', eventDomNodes);
      this.debug.info('%s %o', 'itemDomNodes:', itemDomNodes);
    this.debug.groupEnd(`${this.DOMnode}Nodes Found`);

    /**
     * Keep an eye out for any new products that may be added
     * after the page has loaded. SPA friendly.
     */
    const mutationObserver = new MutationObserver(function(mutations) {
    	mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach((entry) => {
          let classList = entry.classList;
          if (!!classList && classList.contains(this.trackingClass.items)) {
            mutableObserver.observe(entry);
          }
        })
    	});
    });

    if (!!eventDomNodes.length) {
      for (let node of eventDomNodes) {
        mutationObserver.observe(node, {
        	attributes: false,
        	childList: true,
        	characterData: false
        });
      }
    }

    // Create a custom event that passes the dataset through
    // This is consumable on event emission as an object within
    // the event details.
    const mutableObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const thisItem = entry.target;
          const isVisible = new CustomEvent('isVisible', {
            detail: {
              itemType: this.trackingData.get(thisItem).type,
              trackingData: this.trackingData.get(thisItem)
            }
          });
          thisItem.dispatchEvent(isVisible);
          observer.unobserve(thisItem);
        }
      })
    });

    /**
     * Bind our observable behaviour to the products on the page
     */
    if (!!itemDomNodes.length) {
      for (let node of itemDomNodes) {
          mutableObserver.observe(node);
      }
    }

  };

  bindEventTracking(){

    /** Custom cart update event handler **/
    window.addEventListener('cartUpdated', (e) => {

      this.debug.groupCollapsed(`${this.DOMevt}cartUpdated`);
        this.debug.info('Updated', e.detail);
      this.debug.groupEnd(`${this.DOMevt}cartUpdated`);

      let dataLayerObj = this.createDataLayer(e.detail.updateType, e.detail, 'customEvent');
      dataLayer.push(dataLayerObj);
    })

    // Bind to the eventDomNodes class for tracking passive events like pageViews etc.
    let eventDomNodes = [...document.getElementsByClassName(this.trackingClass.events)];
    if (!!eventDomNodes.length) {

      /**
       * Loop through each of these elements and trigger the relevant
       * events for each.
       * ==================================================
       * Event elements can track the following values:
       * • data-gtm-event
       * • data-gtm-category
       * • data-gtm-action
       * • data-gtm-label
       * • data-gtm-journey
       * • data-gtm-vigencia
       * ==================================================
       */
      eventDomNodes.forEach((eventElement, eventIndex) => {

        let eventDataSimple = this.simplifyDataSet(eventElement);
        this.trackingData.set(eventElement, eventDataSimple);

        let eventData = this.trackingData.get(eventElement),
            trackingType = eventData.event,
            itemType = null;

        // Cache all of our data back to the window Object so is is easier
        // to retrieve later
        window.eventTracking[eventIndex] = {
          'element': eventElement,
          'data': eventData,
          'products': [],
          'viewedProducts': [],
          'promotions': [],
          'viewedPromotions': [],
        };

        /**
         * Create our dataLayer Object for the productImpression event and push
         * it to the dataLayer.
         */
        let dataLayerObj = this.createDataLayer(trackingType, window.eventTracking[eventIndex], 0);
        dataLayer.push(dataLayerObj);

        // Build up our list of products within the dom
        let itemDomNodes = [...eventElement.getElementsByClassName(this.trackingClass.items)];
        if (!!itemDomNodes.length) {

          /**
           * Loop through each of these elements and cache the information to
           * the window object.
           * ==================================================
           * Event elements can track the following values:
           * • data-gtm-name
           * • data-gtm-id
           * • data-gtm-price
           * • data-gtm-brand
           * • data-gtm-category
           * • data-gtm-variant
           * • data-gtm-list
           * • data-gtm-position
           * ==================================================
           */

          itemDomNodes.forEach((itemElement, itemIndex) => {
            let itemDataSimple = this.simplifyDataSet(itemElement);
            this.trackingData.set(itemElement, itemDataSimple); // write

            /**
             * Build up the array of items that appear in the user's viewport
             * The dataLayer has access to the most recent version of a variable so
             * there is no need to push multiple events. A single push will suffice.
             */
            let itemData;
            if (!this.trackingData.get(itemElement)) {
              itemData = Object.defineProperty(this.trackingData.get(itemElement), 'list', {
                value: eventData.list,
                writable: true
              })
            } else {
              itemData = this.trackingData.get(itemElement);
            }
            let itemObj = this.createItemObj(itemData);

            itemType = this.trackingData.get(itemElement).type;
            window.eventTracking[eventIndex][itemType].splice(itemIndex, 0, itemObj);

            itemElement.addEventListener('isVisible', (e) => {
              window.eventTracking[eventIndex].viewedProducts.splice(itemIndex, 0, itemObj);
              this.debug.groupCollapsed(`${this.DOMevt}isVisible`);
                this.debug.info('Item: ', itemObj)
              this.debug.groupEnd(`${this.DOMevt}isVisible`)
            }, false);

            itemElement.addEventListener('click', (e) => {
              this.debug.enabled && e.preventDefault();

              this.debug.groupCollapsed(`${this.DOMevt}click`);
                this.debug.info('Item: ', e.target)
              this.debug.groupEnd(`${this.DOMevt}click`)

              /**
               * If the element that is specifically clicked on is not the
               * element that we intend to track, stop. We are adding the
               * listener to the parent product, but we only want to track
               * clicks on elements that have the tracking class attached.
               */
              let target = e.target;
              if (!target.classList.contains(this.trackingClass.clicks)) return

              let clickDataSimple = this.simplifyDataSet(target);
              this.trackingData.set(target, clickDataSimple);

              let trackingTypeStr = this.trackingData.get(target).track,
                  trackingType = !!trackingTypeStr ? trackingTypeStr : null,
                  currentItemData = window.eventTracking[eventIndex][itemType][itemIndex],
                  productQtyEl = eventElement.getElementsByClassName(this.trackingClass.quantity)[0];

              /**
               * This checks to see if there is an input within the event wrapper
               * that has a relevant tracking class (default: 'js-trackQuantity').
               * If this exists, then use this to update the products quantity
               * value.
               */
              if (!!productQtyEl) {
                let qty = currentItemData['quantity'] === undefined ? 0 : parseInt(currentItemData['quantity']),
                    workingValue = parseInt(productQtyEl.value),
                    newValue;

                if (trackingType === 'addToCart') {
                  newValue = qty + workingValue;
                } else if (trackingType === 'removeFromCart') {
                  newValue = qty - workingValue;
                }
                currentItemData['quantity'] = newValue < 0 ? 0 : newValue;
              }

              /**
               * Create our dataLayer Object for the click event and push
               * it to the dataLayer. This also tracks adds and removes from cart.
               */
              let dataLayerObj = this.createDataLayer(trackingType, window.eventTracking[eventIndex], itemIndex);
              dataLayer.push(dataLayerObj);

            })
          })
        }
      })
    }
  };

    /**
     * Elsewhere you may choose to emit your own basket update event.
     * In this instance you can pass values through so that they are picked
     * up by the dataLayer constructor.
     */
  triggerCartEvent = (eventObj, productObj, updateType) => {

    function anyArgUndefined(...args) {
      if (args.some(Boolean)) {
        throw 'Missing Args: registerCartEvent(' +
          `${ !productObj ? ' [✖]productObj, ' : ' [✔]productObj, '}` +
          `${ !eventObj ? ' [✖]eventObj, ' : ' [✔]eventObj, '}` +
          `${ !updateType ? ' [✖]updateType, ' : ' [✔]updateType, '}` + ')';
      }
    }

    try {
      anyArgUndefined(!eventObj, !productObj, !updateType);

      if (typeof productObj !== 'object') {
        throw 'productObj must be an Object';
        return false;
      }

      if (typeof eventObj !== 'object') {
        throw 'eventObj must be an Object';
        return false;
      }

      if (typeof updateType === undefined || !updateType.match(/^(addToCart|removeFromCart)$/)) {
        throw 'updateType must be either "addToCart" or "removeFromCart"';
        return false;
      }

      var cartEvent = new CustomEvent("cartUpdated", {
        detail: {
          updateType: updateType,
          productObj,
          eventObj,
        }
      })

      window.dispatchEvent(cartEvent);

    } catch (e) {
      console.error(e)
    }
  };

}

let JF = new JFdataLayer({logging: true});
