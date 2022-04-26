---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Estaates'
description: 'Aavegotchi Estaates'
contributors:
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/estaates/estaates.png">
<p class="headerImageText">Estaates</p>
</div>

A [Gotchiverse](/gotchiverse) Estaate is two or more REALM parcels linked together via an in-game linking system. Linked parcels allow building Waalls along the edges so that multiple parcels can be fully encircled to help prevent intruders.

Estaates are perfect for [Guilds](/guild) or owners with large holdings, as they allow for privacy, protection, and convenience.

<div class="contentsBox">

**Contents**

<ol>
<li><a href=#benefits-of-estaates>Benefits of Estaates</a></li>
<li><a href=#general-building-rules>General Building Rules</a></li>
<li><a href=#estaate-building--connection-waall--rules>Estaate Building “Connection Waall” Rules</a></li>
<li><a href=#examples>Examples</a></li>
</ol>

</div>

## Benefits of Estaates

Creating an Estaate gives:

* Visibility - Everyone to see the link(s).

* Protection - Owner can protect the Estaate perimeter by equipping Waalls.

* Convenience: Owner can empty all Reservoirs in the Estaate at the same time, instead of one by one.

## General Building Rules

1: Ownership

* The selected parcels must be owned by the same player.
* Each parcel can be a part of only one Estaate.
* An owner can create any number of Estaates

2: Types

* All types of parcels can be included in an Estaate.

3: Proximity

* Parcels up to 8* gotchis away from each other can be linked (this number will likely be tuned).

4: Alignment

* Parcels need not be lined up to one another to link.

5: Quantity

* Lodge Level determines the number of parcels that can be linked together.

6: Clearance

Things that **BLOCK** linking include:
* Items with impassable Collision (walls, towers, etc.)
* Parcel owned by another player is between 2 owned parcels desired to be linked
* Link from another owner is between 2 owned parcels desired to be linked

Things that do **NOT block** linking include:
* Alchemica
* Destructibles
* Background objects like statues, trees, etc.
* If a potential link is considered BLOCKED, it cannot be executed.

7: Adding

* If an owner wishes to add one or more owned parcels to their existing Estaate, they can do so as long as no rules are broken. Attempting to add will recalculate the Estaate linking.

8: Subtracting

* If an owner wishes to remove one or more owned parcels from their existing Estaate, they can do so as long as no rules are broken. Attempting to remove will recalculate the Estaate linking.
* If an owner sells one or more parcels that are part of an Estaate, the Estaate linking will be recalculated at the time of sale.
* If an owner only has two parcels in an estate and sells one, the Estaate and its link will be dissolved.

9: No Boxing In

* If, when calculating a link, one or more unowned parcels or parcels owned by another player will get BOXED IN, a special rule is triggered:
* The center, north-most intended link of the Estaate will be left vacant (not created), leaving an open pathway.
* If no center, north-most potential link is available, the closest clockwise link will be left vacant (not created), ensuring an open pathway exists.

10: Intersection

* A link cannot be formed if it will create an intersection with another Estaate.

## Estaate Building “Connection Waall” Rules

One of the tangible gameplay benefits of creating an Estaate is the ability for the owner to encircle the Estaate’s perimeter with Waalls. The rules below detail how Waalls can be added in a way that will create “Connection Waalls” – in-game walls that connect to form a perimeter, even if there is space between the two parcels.

### Creating a Connection Waall

* A “Connection Waall” comprises game-generated Waalls between 2 player-equipped Waalls.
* The player does not actively equip Waalls in the space between linked parcels. This is reserved for Connection Waalls.
* A Connection Waall can be created by the game if the following conditions are met:

    * A Waall exists at the edge of 1 parcel and another Waall exists on the closest edge of the adjacent linked parcel. These are called Edge Waalls.

    * Edge Waalls can be different levels, but the Connection Waall will be the lowest of the 2 levels.


* Connection Waalls:

    * Should be treated as normal Waalls for game purposes (for attacking, allowing passage, collision, etc.).

    * Cannot be upgraded or unequipped directly.

### Upgrading a Connection Waall

* To upgrade a Connection Waall, the owner must upgrade both equipped edge Waalls to the same level (edge Waalls surround the Connection Waalls) that is higher than the current Connection Waall. Doing so causes the Connection Waalls to update accordingly.

* To unequip a Connection Waall, one edge Waall must be unequipped. If this happens, the Connection Waall is destroyed.

### Destroying a Connection Waall
* If an individual Waall within a Connection Waall is destroyed, then a hole in the Connection Waall will remain until the owner does one of the following:

    * Upgrades 1 Waall on either side of the Connection Waall

    * Unequips 1 Wall on either side of the Connection Waall

## Examples

There are many possible parcel configurations, not all of which can accommodate creation of Estaates. The following walks through a number of these possibilities to give you an idea of the rules for Estaates.

For the following diagrams:

* Only functional representations of how linking works are shown. Game graphics will vary.
* Humble parcels are used to convey these rules, but feel free to imagine any-sized parcels (or any combination therein) instead.
* Parcels owned by the same player are shown in **light blue-green (teal).**
* Unowned parcels are shown in **light gray.**
* Parcels owned by a different player are shown in **light pink.**

### Links

An owner can link 2 or more of their parcels together when they are close enough, even if there is ground Alchemica in between them.

**Linked parcels display an outline around them:**

<img class="bodyImage" src="/estaates/estaates_sample_page1.png" />

**If the parcels are too far apart, have a road in between them, or an unowned or other-player-owned parcel exists in between, the parcels cannot be linked.**

<img class="bodyImage" src="/estaates/estaates_sample_page2.png" />

Note: The red lines indicate desired links that are considered “invalid” and would thus not occur.

**If parcels do not share an edge they cannot be linked.**

<img class="bodyImage" src="/estaates/estaates_sample_page3a.png" />

The **two teal parcels** cannot be linked in either of the above examples.

**If a sequence of linked parcels will trap other parcels then an opening will always be left to allow movement in and out.**

<img class="bodyImage" src="/estaates/estaates_sample_page3b.png" />

Trapped parcels above are a neutral (unowned) parcel and an other-player-owned parcel, respectively.

**There can be many trapped parcels, but all it takes is one to require an opening in the linking.**

<img class="bodyImage" src="/estaates/trapped-parcels.png" />

An owner can always add a new parcel or parcels to their Estaate, as well as remove one or more, and the game will recalculate the linking.

### Waalls

**One of the tangible gameplay benefits of having an Estaate is that the area between links can automatically create “Connection Waalls.”**

Connection Waalls are treated as normal Waalls for purposes of hit points and damage.

<img class="bodyImage" src="/estaates/estaates_sample_08a.png" />

The 4 Connection Waalls above would not be crafted or equipped, but would automatically be generated by the game.

<img class="bodyImage" src="/estaates/estaates_sample_06b.png" />

The owner must build at least 1 Waall on either side of the link, per side, for a Connection Waall to be able to be created. In the above, there is no valid link, so no Connection Waalls would be created.

**More examples of how Waalls would manifest:**

<img class="bodyImage" src="/estaates/estaates_sample_07a.png" />

Since the above linked parcels share 1 Gotchi distance, only a single Waall is created over the link comprising 2 Waall sections as shown.

<img class="bodyImage" src="/estaates/estaates_sample_07b.png" />

In the case of trapped parcels, Waalls can be created, but no Waalls will bridge the opening left to allow movement for trapped parcel(s).

<img class="bodyImage" src="/estaates/estaates_sample_07c.gif" />

The game will always try to create the opening on the north side of an Estaate if there are trapped parcels within it.

**If the Waalls created on either side of a Link are of different levels, the game will choose the lower of the Waall levels to generate as the Connection Waalls over the link.**

<img class="bodyImage" src="/estaates/estaates_sample_08b.png" />

In the above example, there are level 1 Waalls (purple base) and level 4 Waalls (red base) shown.

To create this set up, the owner would have needed to first equip a level 1 Waall in the top (to the left of the link), with a level 4 Waall to its right (to the right of the link) . This would result in the top Connection Waall section of 6 Waalls at level 1 (the lower of the 2 levels).

Notice below it that there are level 4 Waalls on either side that result in a level 4 Connection Waall section in between them.

<img class="bodyImage" src="/estaates/estaates_sample_06a.png" />

The above example has the same equipped Waalls on the left and right, resulting in level 1 Connection Waalls being created over the links.

If the owner unequips relevant Waalls or upgrades them, the game will recalculate the connecting Waalls to create.

If a Waall within a Connection Waall is destroyed, a hole will remain until the owner either upgrades or unequips one of the Waalls on either side of the link.