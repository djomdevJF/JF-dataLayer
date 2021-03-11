# datalayer.js Implementation Guide

## Table of Contents
-   [Javascript Versions](#javascript-versions)
-   [The master JF Object](#the-master-jf-object)
-   [Globally accessible store of data](#globally-accessible-store-of-data)
    -   [window.eventTracking](#window.eventtracking)
-   [Custom HTML attributes](#custom-html-attributes)
-   [Configuring your HTML to track events](#configuring-your-html-to-track-events)
    -   [.js-trackEvent](#js-trackevent)
    -   [.js-trackItem](#js-trackitem)
    -   [.js-trackClick](#js-trackclick)
    -   [data-gtm-event](#data-gtm-event)
    -   [data-gtm-type](#data-gtm-type)
    -   [data-gtm-track](#data-gtm-track)
-   [Event Types](#event-types)
    -   ['Passive' Event tracking](#passive-event-tracking)
    -   ['Active' Event tracking](#active-event-tracking)
-   [Event triggers](#event-triggers)
    -   [productImpression & promotionView](#productimpression-promotionview)
    -   [productDetail & checkout](#productdetail-checkout)
    -   [purchase](#purchase)
    -   [productClick & promotionClick](#productclick-promotionclick)
    -   [addToCart & removeFromCart](#addtocart-removefromcart)
    -   [Manually triggering a cart update event](#manually-triggering-a-cart-update-event)    

## Javascript Versions

This code ships with two versions.

+ `datalayer.js` => The raw es6 base file that is
used in all of the examples and is the standard.
+ `datalayer_es5.js` => A Babel compiled es5 compatible version of
the script.

## The master JF Object

All of the main logic for the tracking is stored within a namespaced object `JF`
at the top of this object are some classes that are set as default tracking
classes, however if these cause conflicts with your code you are free to change
them. Just make sure to update your mark up to match.

```js
// Instantiating the logic
let JF = new JFdataLayer();
```

You are also able to pass in some parameters if you choose. These parameters
are contained within an `object` and allow you to set your own custom classes
and to enable helpful logging code.

```js
// Dafault properties and object structure
classes: {
  events:      'js-trackEvent',   // Event tracking class
  items:       'js-trackItem',    // Item (product, promotions) tracking class
  clicks:      'js-trackClick',   // Click trigger class
  quantity:    'js-trackQuantity' // Used to determine inputs for cart tracking  
},
logging: false // Whether or not to enable custom logging
```

```js
// Defining custom classes
classes: {
let JF = new JFdataLayer({
    events:      'foo',
    items:       'bar',
    clicks:      'baz',
    quantity:    'qux'
  }
});

// Enabling logging code
let JF = new JFdataLayer({logging: true});
```


## Globally accessible store of data

All of the data that is tracked via this custom code is retrievable on the
`window` object by accessing `window.eventTracking`.

### window.eventTracking

```js
// Input
window.eventTracking

// Console output
{
  data: {
    event: "productImpression",
    category: "EE Funnel",
    action: "Impresion Producto",
    label: "Teléfonos",
    currencycode: "GTQ",
    …
  }
  element: div.item-list.js-trackEvent
  products: (3) [{…}, {…}, {…}]
  promotions: []
  viewedProducts: [{…}]
  viewedPromotions: []
}
```

## Custom HTML attributes

All tracking data is read from the DOM using custom data attributes. These will
need to be defined and populated by your CMS solution. A custom class is also
needed to define which type of data is referenced on the DOM elements.

> **Note:** Custom attributes follow the format `data-foo-bar` and are converted
to camelCased properties in JavaScript: `data-fooBar`. To ensure limited
crossover with other custom attributes, the values we are using are namespaced
in the DOM with the prefix `gtm-`. These are then manipulated in the script for
ease of use.

## Configuring your HTML to track events

To begin tracking events, you will need to add the `js-trackEvent` class
to wrapper elements that you wish to track along with the `data-gtm-event="…"` data attribute.

### .js-trackEvent

The JavaScript looks for the `js-trackEvent` class and then reads custom
attributes included on the related DOM element to build the event data. You are
able to provide whichever custom attributes you like to as long as they follow
the namespace rule below.

### data-gtm-event
Events tracked through the attribute `data-gtm-event`:

+ `productImpression`
+ `promotionView`
+ `productDetail`
+ `checkout`
+ `purchase`

All events that do not require user interaction should be wrapped with the
`js-trackEvent` class and `data-gtm-event` attribute.

```html
<!--
===================================
'productImpression' event example
===================================
-->

<div class="… js-trackEvent" data-gtm-event="productImpression"
    data-gtm-category="EE Funnel"
    data-gtm-action="Impresion Producto"
    data-gtm-label="Teléfonos"
    data-gtm-currency-code="GTQ"
    data-gtm-list="New phones 2021"
    …
>
…
</div>
```

> **Note:** It is important to keep in mind that the event
tracking class should be considered as a wrapper to other DOM
elements on the page that would also be tracked. For example a
`productImpression` event would not track anything if it doesn't
wrap any 'products'.


### .js-trackItem

To begin tracking items within events or items for click tracking, you will
need to add the `js-trackItem` class along with the `data-gtm-type="…"` data
attribute to elements that you wish to track in this way.

The JavaScript looks for the `js-trackItem` class and then reads custom
attributes included on the related DOM element to build the event data. These
items are more strictly typed so there are limitations on the data you can
provide.

### data-gtm-type

Items tracked through the attribute `data-gtm-type` must have a value of
+ `products` or
+ `promotions`

#### data-gtm-type="products"

Products are items that a user may which to view or purchase. They are not
limited to physical items.

+ `data-gtm-name`
+ `data-gtm-id`
+ `data-gtm-price`
+ `data-gtm-brand`
+ `data-gtm-category`
+ `data-gtm-variant`
+ `data-gtm-list`
+ `data-gtm-position`
+ `data-gtm-quantity`


```html
<!--
===================================
'productImpression' event example
===================================
-->

<!-- The event -->
<div class="… js-trackEvent" data-gtm-event="productImpression" … >

  <!-- The item -->
  <div class="… js-trackItem" data-gtm-type="products"
      data-gtm-name="Iphone 1"
      data-gtm-id="123"
      data-gtm-price="22.99"
      data-gtm-brand="Apple"
      data-gtm-category="Teléfonos"
      data-gtm-variant="Black"
      data-gtm-position="1"
      …
  >
  …
  </div>
…
</div>
```

#### data-gtm-type="promotions"

Promotions are materials such as banner images, advertorials or any other
marketing designed to drive users to a product.

+ `data-gtm-creative`
+ `data-gtm-id`
+ `data-gtm-name`
+ `data-gtm-position`

```html
<!--
===================================
'promotionView' event example
===================================
-->

<!-- The event -->
<div class="… js-trackEvent" data-gtm-event="promotionView" … >

  <!-- The item -->
  <div class="… js-trackItem" data-gtm-type="promotions"
      data-gtm-creative="Saldos"
      data-gtm-id="191202"
      data-gtm-name="4xsaldojunio"
      data-gtm-position="Slider2a:Home"
      …
  >
  …
  </div>
…
</div>
```

### .js-trackClick

The JavaScript looks for the `js-trackClick` class to track user interactions.
It then reads custom attributes included on the related DOM element to build the event data.

### data-gtm-track

Events tracked through the attribute `data-gtm-track`:

+ `productClick`
+ `promotionClick`

All clickable elements within a 'product' or 'promotion' that you want to track
should have the `js-trackClick` class and `data-gtm-track` attribute.

## Event Types

### 'Passive' Event tracking
'Passive' events are considered to be ones that fire without user interactions
with the DOM, events such as viewing a product, visiting a product detail page
or seeing a promotion for example.

These events rely on DOM mark up to trigger and typically trigger on page load
or when child elements become visible.

#### Passive events

+ `productImpression` - Tracked when products enter the viewport
+ `promotionView` - Tracked when promotions enter the viewport
+ `productDetail` - Tracked on page load (assuming data is provided)
+ `checkout` - Tracked on page load (assuming data is provided)
+ `purchase` - Tracked on page load (assuming data is provided)

### 'Active' Event tracking

'Active' events are considered to be ones where a user interacts with elements
on the page. Events like showing active interest in a product or adding an item
to the cart would be considered 'active' events.

These events rely on user activity to trigger, `click` events typically, however this is not always the case.

#### Active events

+ `productClick` - Tracked when a user clicks a trigger element (before page load)
+ `promotionClick` - Tracked when a user clicks a trigger element (before page load)
+ `addToCart` - Special case, see note below
+ `removeFromCart` - Special case, see note below

## Event triggers

### productImpression & promotionView

`productImpression` and `promotionView` events are triggered when a product becomes visible within
the viewport. The presence of a product on a page does not guarantee that a user
sees it.

To combat this, `observables` have been used to update the dataLayer ONLY
when DOM elements intersect the viewport.

There are two sets of required mark up for these events to trigger, a wrapper and
at least one 'product'.

### productDetail & checkout

`productDetail` and `checkout` events are triggered when a user lands on a page
that has correctly configured `js-trackEvent` class, `data-gtm-event="…"`
attribute and additional custom data-attribute properties. Remember that events
are able to receive whatever parameters you like, so simply set up the attributes
to match the desired event object data structure.

**JavaScript**

```js
// Desired javascript
dataLayer.push({
  event: checkout,
  eventCategory: 'EE Funnel',
  eventAction: 'Step 3',
  eventLabel: 'Payment',
  journey: 'New line with contract',
  ecommerce: {
    …
  }
})
```

**HTML**

```html
<div class="… js-trackEvent" data-gtm-event="checkout"
  data-gtm-event=""
  data-gtm-event-category="EE Funnel"
  data-gtm-event-action="Step 3"
  data-gtm-event-label="Payment"
  data-gtm-journey="New line with contract"
  …
>
…
</div>
```

### purchase

As with the previous example, the `purchase` event is triggered when a user
lands on a page that has correctly configured `js-trackEvent` class,
`data-gtm-event="…"` attribute and additional custom `data-attribute`
properties; However, once a user has made a purchase and is on a "Thank you"
page, it is not typical to present them with their order.

You do not need to render any *visible* DOM elements, it is only required that
they are present. This can be achieved however you like, however in the example
provided in purchase.html, empty `<var>` elements are used.

**JavaScript**

```js
// Desired javascript
dataLayer.push({
  action: 'transaction',
  affiliation: 'Tigo Store',
  event: purchase,
  category: 'EE Funnel'
  coupon: 'TIGO20'
  id: 'abc123',
  label: 'Successful'
  revenue: '123.45',
  shipping: '4.99',
  tax: '3.00',
  ecommerce: {
    …
  }
})
```


**HTML**

```html
<!--
===================================
'purchase' event example
===================================
-->

<div class="… js-trackEvent" data-gtm-event="purchase"
    data-gtm-category="EE Funnel"
    data-gtm-action="Transaction"
    data-gtm-label="Successful"
    data-gtm-id="abc123"
    data-gtm-affiliation="Tigo Store"
    data-gtm-revenue="123.45"
    data-gtm-tax="3.00"
    data-gtm-shipping="4.99"
    data-gtm-coupon="TIGO20"
    …
>
…
</div>
```

>**NOTE:** A far more robust solution however, would be to have a separate piece
of logic independent of the rendered DOM that fires the event itself. Since the
purchase has already completed by the time the page loads, it is inefficient to
render the data to the DOM, to then trigger a push. See [Google's documentation](https://developers.google.com/tag-manager/enhanced-ecommerce#purchases) for more information.


### productClick & promotionClick

Click tracking is based on the container element/s that they are children of.
Thay are expected to be the children of at least a `.js-trackItem` which is
either a 'product' or 'promotion'.

The only additional attribute required is `data-gtm-track` which houses the
relevant event to send.

**HTML - Product**

```html
<!--
===================================
'productClick' event example
===================================
-->

<!-- The event -->
<div class="item-list js-trackEvent" data-gtm-event="productImpression" … >
  <!-- The item -->
  <div class="item js-trackItem" data-gtm-type="products" … >

    <!-- The click trigger -->
    <a class="js-trackClick" data-gtm-track="productClick" … >
      Buy it now!
    </a>

  </div>
</div>
```

**HTML - Promotions**

```html
<!--
===================================
'promotionClick' event example
===================================
-->

<!-- The event -->
<div class="item-list js-trackEvent" data-gtm-event="promotionView" … >
  <!-- The item -->
  <div class="item js-trackItem" data-gtm-type="promotions" … >

    <!-- The click trigger -->
    <a class="js-trackClick" data-gtm-track="promotionClick" … >
      Buy it now!
    </a>

  </div>
</div>
```

### addToCart & removeFromCart

The two cart events `addToCart` and `removeFromCart` have some rudimentary tracking created that requires an add/remove button and an input with a specific
class. This is fine for basic applications however a more robust solution may
be required.

Provided is a method to call on cart update that allows for finer control of
the dataLayer event. See: [Manually triggering a cart update event](#manually-triggering-a-cart-update-event)


**HTML - Cart update**

```html
<!--
==============================================
'addToCart' or 'removeFromCart' event example
==============================================
-->

<!-- The event -->
<div class="… js-trackEvent" data-gtm-event="productDetail" … >
  <!-- The item -->
  <div class="… js-trackItem" data-gtm-type="products" … >

    <!-- Note the input element with a class of .js-trackQuantity -->
    <input class="js-trackQuantity" type="number" value="1" … >

    <!-- The click triggers -->
    <a class="… js-trackClick" data-gtm-track="addToCart" … >
      Add to cart
    </a>
    <a class="… js-trackClick" data-gtm-track="removeFromCart" … >
      Remove from cart
    </a>

  </div>
</div>
```

### Manually triggering a cart update event

It is possible to trigger a cart update event manually. This has been
provided so that you aren't reliant on the specific mark up of the DOM to update
the dataLayer for the `addToCart` and `removeFromCart` events.

You may choose to fire this event when a user is in the checkout and removes
an item from their cart for example.

To trigger this event, simply attach the function call `JF.triggerCartEvent()`
to the remainder of your application's cart update logic.

The triggerCartEvent function takes 3 parameters.

```js
// eventObj | an object for the first part of the dataLayer constructor.
var foo = {
  event: 'addToCart',
  eventCategory: 'EE Funnel',
  eventAction: 'Agregar al Carrito',
  eventLabel: 'Nueva Línea',
  journey: 'Nueva línea con contrato',
  vigenciaPlan: '24 Meses'
}

// productObj | an object for the ecommerce part of the dataLayer constructor.
var bar = {
  brand: 'Apple',
  category: 'Teléfonos',
  id: '124',
  list: 'Detalle Producto',
  name: 'Iphone 2',
  price: '44.95',
  quantity: 5,
  variant: 'White'
}

// updateType | a string that is either addToCart or removeFromCart
let baz = 'addToCart'

JF.triggerCartEvent(foo, bar, baz);
```
