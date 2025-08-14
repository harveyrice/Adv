export interface Criteria {
  value: string;
  title: string;
}

export interface AdvancementDetails {
  title: string;
  criteria?: Criteria[];
  done?: boolean;
}

export interface Advancements {
  [index: string]: AdvancementDetails;
}

export const advancements: Advancements = {
  "minecraft:story/root": {
    title: "Minecraft",
  },
  "minecraft:story/mine_stone": {
    title: "Stone Age",
  },
  "minecraft:story/upgrade_tools": {
    title: "Getting an Upgrade",
  },
  "minecraft:story/smelt_iron": {
    title: "Acquire Hardware",
  },
  "minecraft:story/obtain_armor": {
    title: "Suit Up",
  },
  "minecraft:story/lava_bucket": {
    title: "Hot Stuff",
  },
  "minecraft:story/iron_tools": {
    title: "Isn't It Iron Pick",
  },
  "minecraft:story/deflect_arrow": {
    title: "Not Today, Thank you",
  },
  "minecraft:story/form_obsidian": {
    title: "Ice Bucket Challenge",
  },
  "minecraft:story/mine_diamond": {
    title: "Diamonds!",
  },
  "minecraft:story/enter_the_nether": {
    title: "We Need to Go Deeper",
  },
  "minecraft:story/shiny_gear": {
    title: "Cover Me with Diamonds",
  },
  "minecraft:story/enchant_item": {
    title: "Enchanter",
  },
  "minecraft:story/cure_zombie_villager": {
    title: "Zombie Doctor",
  },
  "minecraft:story/follow_ender_eye": {
    title: "Eye Spy",
  },
  "minecraft:story/enter_the_end": {
    title: "The End?",
  },

  "minecraft:nether/all_effects": {
    title: "How Did We Get Here?",
  },
  "minecraft:nether/all_potions": {
    title: "A Furious Cocktail",
  },
  "minecraft:nether/brew_potion": {
    title: "Local Brewery",
  },
  "minecraft:nether/charge_respawn_anchor": {
    title: 'Not Quite "Nine" Lives',
  },
  "minecraft:nether/create_beacon": {
    title: "Bring Home the Beacon",
  },
  "minecraft:nether/create_full_beacon": {
    title: "Beaconator",
  },
  "minecraft:nether/distract_piglin": {
    title: "Oh Shiny",
  },
  "minecraft:nether/explore_nether": {
    title: "Hot Tourist Destinations",
    criteria: [
      { value: "minecraft:crimson_forest", title: 'Crimson Forest' },
      { value: "minecraft:nether_wastes", title: 'Nether Wastes' },
      { value: "minecraft:soul_sand_valley", title: 'Soul Sand Valley' },
      { value: "minecraft:basalt_deltas", title: 'Basalt Deltas' },
      { value: "minecraft:warped_forest", title: 'Warped Forest' },
    ],
  },
  "minecraft:nether/fast_travel": {
    title: "Subspace Bubble",
  },
  "minecraft:nether/find_bastion": {
    title: "Those Were The Days",
  },
  "minecraft:nether/find_fortress": {
    title: "A Terrible Fortress",
  },
  "minecraft:nether/get_wither_skull": {
    title: "Spooky Scary Skeleton",
  },
  "minecraft:nether/loot_bastion": {
    title: "War Pigs",
  },
  "minecraft:nether/netherite_armor": {
    title: "Cover Me in Debris",
  },
  "minecraft:nether/obtain_ancient_debris": {
    title: "Hidden in the Depths",
  },
  "minecraft:nether/obtain_blaze_rod": {
    title: "Into Fire",
  },
  "minecraft:nether/obtain_crying_obsidian": {
    title: "Who is Cutting Onions?",
  },
  "minecraft:nether/return_to_sender": {
    title: "Return to Sender",
  },
  "minecraft:nether/ride_strider": {
    title: "This Boat Has Legs",
  },
  "minecraft:nether/ride_strider_in_overworld_lava": {
    title: "Feels Like Home",
  },
  "minecraft:nether/root": {
    title: "Nether",
  },
  "minecraft:nether/summon_wither": {
    title: "Withering Heights",
  },
  "minecraft:nether/uneasy_alliance": {
    title: "Uneasy Alliance",
  },
  "minecraft:adventure/use_lodestone": {
    title: "Country Lode, Take Me Home",
  },

  "minecraft:adventure/adventuring_time": {
    title: "Adventuring Time",
    criteria: [
      { value: "minecraft:snowy_slopes", title: 'Snowy Slopes' },
      { value: "minecraft:old_growth_pine_taiga", title: 'Old Growth Pine Taiga' },
      { value: "minecraft:mushroom_fields", title: 'Mushroom Fields' },
      { value: "minecraft:taiga", title: 'Taiga' },
      { value: "minecraft:deep_ocean", title: 'Deep Ocean' },
      { value: "minecraft:eroded_badlands", title: 'Eroded Badlands' },
      { value: "minecraft:frozen_river", title: 'Frozen River' },
      { value: "minecraft:cherry_grove", title: 'Cherry Grove' },
      { value: "minecraft:sunflower_plains", title: 'Sunflower Plains' },
      { value: "minecraft:birch_forest", title: 'Birch Forest' },
      { value: "minecraft:windswept_hills", title: 'Windswept Hills' },
      { value: "minecraft:wooded_badlands", title: 'Wooded Badlands' },
      { value: "minecraft:bamboo_jungle", title: 'Bamboo Jungle' },
      { value: "minecraft:badlands", title: 'Badlands' },
      { value: "minecraft:savanna_plateau", title: 'Savanna Plateau' },
      { value: "minecraft:beach", title: 'Beach' },
      { value: "minecraft:dark_forest", title: 'Dark Forest' },
      { value: "minecraft:stony_peaks", title: 'Stony Peaks' },
      { value: "minecraft:mangrove_swamp", title: 'Mangrove Swamp' },
      { value: "minecraft:sparse_jungle", title: 'Sparse Jungle' },
      { value: "minecraft:river", title: 'River' },
      { value: "minecraft:lukewarm_ocean", title: 'Lukewarm Ocean' },
      { value: "minecraft:stony_shore", title: 'Stony Shore' },
      { value: "minecraft:snowy_plains", title: 'Snowy Plains' },
      { value: "minecraft:dripstone_caves", title: 'Dripstone Caves' },
      { value: "minecraft:snowy_taiga", title: 'Snowy Taiga' },
      { value: "minecraft:grove", title: 'Grove' },
      { value: "minecraft:swamp", title: 'Swamp' },
      { value: "minecraft:jagged_peaks", title: 'Jagged Peaks' },
      { value: "minecraft:cold_ocean", title: 'Cold Ocean' },
      { value: "minecraft:forest", title: 'Forest' },
      { value: "minecraft:lush_caves", title: 'Lush Caves' },
      { value: "minecraft:deep_cold_ocean", title: 'Deep Cold Ocean' },
      { value: "minecraft:ice_spikes", title: 'Ice Spikes' },
      { value: "minecraft:frozen_ocean", title: 'Frozen Ocean' },
      { value: "minecraft:desert", title: 'Desert' },
      { value: "minecraft:deep_frozen_ocean", title: 'Deep Frozen Ocean' },
      { value: "minecraft:windswept_forest", title: 'Windswept Forest' },
      { value: "minecraft:ocean", title: 'Ocean' },
      { value: "minecraft:jungle", title: 'Jungle' },
      { value: "minecraft:old_growth_spruce_taiga", title: 'Old Growth Spruce Taiga' },
      { value: "minecraft:snowy_beach", title: 'Snowy Beach' },
      { value: "minecraft:windswept_savanna", title: 'Windswept Savanna' },
      { value: "minecraft:warm_ocean", title: 'Warm Ocean' },
      { value: "minecraft:deep_lukewarm_ocean", title: 'Deep Lukewarm Ocean' },
      { value: "minecraft:flower_forest", title: 'Flower Forest' },
      { value: "minecraft:frozen_peaks", title: 'Frozen Peaks' },
      { value: "minecraft:old_growth_birch_forest", title: 'Old Growth Birch Forest' },
      { value: "minecraft:deep_dark", title: 'Deep Dark' },
      { value: "minecraft:meadow", title: 'Meadow' },
      { value: "minecraft:windswept_gravelly_hills", title: 'Windswept Gravelly Hills' },
      { value: "minecraft:savanna", title: 'Savanna' },
      { value: "minecraft:plains", title: 'Plains' },
      { value: "minecraft:pale_garden", title: 'Pale Garden' },
    ],
  },
  "minecraft:adventure/arbalistic": {
    title: "Arbalistic",
  },
  "minecraft:adventure/avoid_vibration": {
    title: "Sneak 100",
  },
  "minecraft:adventure/bullseye": {
    title: "Bullseye",
  },
  "minecraft:adventure/craft_decorated_pot_using_only_sherds": {
    title: "Careful Restoration",
  },
  "minecraft:adventure/fall_from_world_height": {
    title: "Caves & Cliffs",
  },
  "minecraft:adventure/hero_of_the_village": {
    title: "Hero of the Village",
  },
  "minecraft:adventure/honey_block_slide": {
    title: "Sticky Situation",
  },
  "minecraft:adventure/kill_a_mob": {
    title: "Monster Hunter",
  },
  "minecraft:adventure/kill_all_mobs": {
    title: "Monsters Hunted",
    criteria: [
      { value: "minecraft:pillager", title: 'Pillager' },
      { value: "minecraft:blaze", title: 'Blaze' },
      { value: "minecraft:skeleton", title: 'Skeleton' },
      { value: "minecraft:zoglin", title: 'Zoglin' },
      { value: "minecraft:elder_guardian", title: 'Elder Guardian' },
      { value: "minecraft:ravager", title: 'Ravager' },
      { value: "minecraft:ghast", title: 'Ghast' },
      { value: "minecraft:hoglin", title: 'Hoglin' },
      { value: "minecraft:guardian", title: 'Guardian' },
      { value: "minecraft:vindicator", title: 'Vindicator' },
      { value: "minecraft:magma_cube", title: 'Magma Cube' },
      { value: "minecraft:piglin_brute", title: 'Piglin Brute' },
      { value: "minecraft:spider", title: 'Spider' },
      { value: "minecraft:creeper", title: 'Creeper' },
      { value: "minecraft:wither", title: 'Wither' },
      { value: "minecraft:slime", title: 'Slime' },
      { value: "minecraft:evoker", title: 'Evoker' },
      { value: "minecraft:phantom", title: 'Phantom' },
      { value: "minecraft:zombified_piglin", title: 'Zombified Piglin' },
      { value: "minecraft:witch", title: 'Witch' },
      { value: "minecraft:wither_skeleton", title: 'Wither Skeleton' },
      { value: "minecraft:husk", title: 'Husk' },
      { value: "minecraft:ender_dragon", title: 'Ender Dragon' },
      { value: "minecraft:shulker", title: 'Shulker' },
      { value: "minecraft:cave_spider", title: 'Cave Spider' },
      { value: "minecraft:piglin", title: 'Piglin' },
      { value: "minecraft:enderman", title: 'Enderman' },
      { value: "minecraft:silverfish", title: 'Silverfish' },
      { value: "minecraft:stray", title: 'Stray' },
      { value: "minecraft:endermite", title: 'Endermite' },
      { value: "minecraft:vex", title: 'Vex' },
      { value: "minecraft:zombie", title: 'Zombie' },
      { value: "minecraft:drowned", title: 'Drowned' },
      { value: "minecraft:zombie_villager", title: 'Zombie Villager' },
      { value: "minecraft:creaking", title: 'Creaking' },
      { value: "minecraft:bogged", title: 'Bogged' },
      { value: "minecraft:breeze", title: 'Breeze' },
    ],
  },
  "minecraft:adventure/kill_mob_near_sculk_catalyst": {
    title: "It Spreads",
  },
  "minecraft:adventure/lightning_rod_with_villager_no_fire": {
    title: "Surge Protector",
  },
  "minecraft:adventure/ol_betsy": {
    title: "Ol' Betsy",
  },
  "minecraft:adventure/play_jukebox_in_meadows": {
    title: "Sound of Music",
  },
  "minecraft:adventure/read_power_of_chiseled_bookshelf": {
    title: "The Power of Books",
  },
  "minecraft:adventure/root": {
    title: "Adventure",
  },
  "minecraft:adventure/salvage_sherd": {
    title: "Respecting the Remnants",
  },
  "minecraft:adventure/shoot_arrow": {
    title: "Take Aim",
  },
  "minecraft:adventure/sleep_in_bed": {
    title: "Sweet Dreams",
  },
  "minecraft:adventure/sniper_duel": {
    title: "Sniper Duel",
  },
  "minecraft:adventure/spyglass_at_dragon": {
    title: "Is It a Plane?",
  },
  "minecraft:adventure/spyglass_at_ghast": {
    title: "Is It a Balloon?",
  },
  "minecraft:adventure/spyglass_at_parrot": {
    title: "Is It a Bird?",
  },
  "minecraft:adventure/summon_iron_golem": {
    title: "Hired Help",
  },
  "minecraft:adventure/throw_trident": {
    title: "A Throwaway Joke",
  },
  "minecraft:adventure/totem_of_undying": {
    title: "Postmortal",
  },
  "minecraft:adventure/trade": {
    title: "What a Deal!",
  },
  "minecraft:adventure/trade_at_world_height": {
    title: "Star Trader",
  },
  "minecraft:adventure/trim_with_all_exclusive_armor_patterns": {
    title: "Smithing with Style",
    criteria: [
      { value: "armor_trimmed_minecraft:silence_armor_trim_smithing_template_smithing_trim", title: 'Silence Armor Trim' },
      { value: "armor_trimmed_minecraft:wayfinder_armor_trim_smithing_template_smithing_trim", title: 'Wayfinder Armor Trim' },
      { value: "armor_trimmed_minecraft:tide_armor_trim_smithing_template_smithing_trim", title: 'Tide Armor Trim' },
      { value: "armor_trimmed_minecraft:spire_armor_trim_smithing_template_smithing_trim", title: 'Spire Armor Trim' },
      { value: "armor_trimmed_minecraft:vex_armor_trim_smithing_template_smithing_trim", title: 'Vex Armor Trim' },
      { value: "armor_trimmed_minecraft:ward_armor_trim_smithing_template_smithing_trim", title: 'Ward Armor Trim' },
      { value: "armor_trimmed_minecraft:snout_armor_trim_smithing_template_smithing_trim", title: 'Snout Armor Trim' },
      { value: "armor_trimmed_minecraft:rib_armor_trim_smithing_template_smithing_trim", title: 'Rib Armor Trim' },
    ],
  },
  "minecraft:adventure/trim_with_any_armor_pattern": {
    title: "Crafting a New Look",
  },
  "minecraft:adventure/two_birds_one_arrow": {
    title: "Two Birds, One Arrow",
  },
  "minecraft:adventure/very_very_frightening": {
    title: "Very Very Frightening",
  },
  "minecraft:adventure/voluntary_exile": {
    title: "Voluntary Exile",
  },
  "minecraft:adventure/walk_on_powder_snow_with_leather_boots": {
    title: "Light as a Rabbit",
  },
  "minecraft:adventure/whos_the_pillager_now": {
    title: "Who's the Pillager Now?",
  },
  "minecraft:adventure/heart_transplanter": {
    title: "Heart Transplanter",
  },
  "minecraft:adventure/brush_armadillo": {
    title: "Isn't it Scute?",
  },
  "minecraft:adventure/minecraft_trials_edition": {
    title: "Minecraft: Trial(s) Edition",
  },
  "minecraft:adventure/crafters_crafting_crafters": {
    title: "Crafters Crafting Crafters",
  },
  "minecraft:adventure/lighten_up": {
    title: "Lighten Up",
  },
  "minecraft:adventure/who_needs_rockets": {
    title: "Who Needs Rockets?",
  },
  "minecraft:adventure/under_lock_and_key": {
    title: "Under Lock and Key",
  },
  "minecraft:adventure/revaulting": {
    title: "Revaulting",
  },
  "minecraft:adventure/blowback": {
    title: "Blowback",
  },
  "minecraft:adventure/overoverkill": {
    title: "Over-Overkill",
  },

  "minecraft:end/dragon_breath": {
    title: "You Need a Mint",
  },
  "minecraft:end/dragon_egg": {
    title: "The Next Generation",
  },
  "minecraft:end/elytra": {
    title: "Sky's the Limit",
  },
  "minecraft:end/enter_end_gateway": {
    title: "Remote Gateway",
  },
  "minecraft:end/find_end_city": {
    title: "The City at the End of the Game",
  },
  "minecraft:end/kill_dragon": {
    title: "Free the End",
  },
  "minecraft:end/levitate": {
    title: "Great View From Up Here",
  },
  "minecraft:end/respawn_dragon": {
    title: "The End... Again...",
  },
  "minecraft:end/root": {
    title: "The End",
  },

  "minecraft:husbandry/allay_deliver_cake_to_note_block": {
    title: "Birthday Song",
  },
  "minecraft:husbandry/allay_deliver_item_to_player": {
    title: "You've Got a Friend in Me",
  },
  "minecraft:husbandry/axolotl_in_a_bucket": {
    title: "The Cutest Predator",
  },
  "minecraft:husbandry/balanced_diet": {
    title: "A Balanced Diet",
    criteria: [
      { value: "cooked_porkchop", title: 'Cooked Porkchop' },
      { value: "chicken", title: 'Chicken' },
      { value: "honey_bottle", title: 'Honey Bottle' },
      { value: "cooked_mutton", title: 'Cooked Mutton' },
      { value: "sweet_berries", title: 'Sweet Berries' },
      { value: "cooked_beef", title: 'Cooked Beef' },
      { value: "chorus_fruit", title: 'Chorus Fruit' },
      { value: "beef", title: 'Beef' },
      { value: "baked_potato", title: 'Baked Potato' },
      { value: "porkchop", title: 'Porkchop' },
      { value: "tropical_fish", title: 'Tropical Fish' },
      { value: "beetroot_soup", title: 'Beetroot Soup' },
      { value: "apple", title: 'Apple' },
      { value: "spider_eye", title: 'Spider Eye' },
      { value: "potato", title: 'Potato' },
      { value: "rabbit", title: 'Rabbit' },
      { value: "cooked_cod", title: 'Cooked Cod' },
      { value: "poisonous_potato", title: 'Poisonous Potato' },
      { value: "pumpkin_pie", title: 'Pumpkin Pie' },
      { value: "mutton", title: 'Mutton' },
      { value: "pufferfish", title: 'Pufferfish' },
      { value: "golden_apple", title: 'Golden Apple' },
      { value: "bread", title: 'Bread' },
      { value: "rotten_flesh", title: 'Rotten Flesh' },
      { value: "cookie", title: 'Cookie' },
      { value: "suspicious_stew", title: 'Suspicious Stew' },
      { value: "glow_berries", title: 'Glow Berries' },
      { value: "salmon", title: 'Salmon' },
      { value: "dried_kelp", title: 'Dried Kelp' },
      { value: "melon_slice", title: 'Melon Slice' },
      { value: "golden_carrot", title: 'Golden Carrot' },
      { value: "beetroot", title: 'Beetroot' },
      { value: "cooked_rabbit", title: 'Cooked Rabbit' },
      { value: "cooked_chicken", title: 'Cooked Chicken' },
      { value: "enchanted_golden_apple", title: 'Enchanted Golden Apple' },
      { value: "mushroom_stew", title: 'Mushroom Stew' },
      { value: "cod", title: 'Cod' },
      { value: "rabbit_stew", title: 'Rabbit Stew' },
      { value: "cooked_salmon", title: 'Cooked Salmon' },
      { value: "carrot", title: 'Carrot' },
    ],
  },
  "minecraft:husbandry/bred_all_animals": {
    title: "Two by Two",
    criteria: [
      { value: "minecraft:armadillo", title: 'Armadillo' },
      { value: "minecraft:cat", title: 'Cat' },
      { value: "minecraft:donkey", title: 'Donkey' },
      { value: "minecraft:fox", title: 'Fox' },
      { value: "minecraft:pig", title: 'Pig' },
      { value: "minecraft:llama", title: 'Llama' },
      { value: "minecraft:turtle", title: 'Turtle' },
      { value: "minecraft:frog", title: 'Frog' },
      { value: "minecraft:sheep", title: 'Sheep' },
      { value: "minecraft:mule", title: 'Mule' },
      { value: "minecraft:hoglin", title: 'Hoglin' },
      { value: "minecraft:sniffer", title: 'Sniffer' },
      { value: "minecraft:mooshroom", title: 'Mooshroom' },
      { value: "minecraft:strider", title: 'Strider' },
      { value: "minecraft:ocelot", title: 'Ocelot' },
      { value: "minecraft:cow", title: 'Cow' },
      { value: "minecraft:goat", title: 'Goat' },
      { value: "minecraft:camel", title: 'Camel' },
      { value: "minecraft:chicken", title: 'Chicken' },
      { value: "minecraft:wolf", title: 'Wolf' },
      { value: "minecraft:panda", title: 'Panda' },
      { value: "minecraft:horse", title: 'Horse' },
      { value: "minecraft:rabbit", title: 'Rabbit' },
      { value: "minecraft:bee", title: 'Bee' },
      { value: "minecraft:axolotl", title: 'Axolotl' },
    ],
  },
  "minecraft:husbandry/breed_an_animal": {
    title: "The Parrots and the Bats",
  },
  "minecraft:husbandry/complete_catalogue": {
    title: "A Complete Catalogue",
    criteria: [
      { value: "minecraft:white", title: 'White' },
      { value: "minecraft:tabby", title: 'Tabby' },
      { value: "minecraft:calico", title: 'Calico' },
      { value: "minecraft:siamese", title: 'Siamese' },
      { value: "minecraft:persian", title: 'Persian' },
      { value: "minecraft:jellie", title: 'Jellie' },
      { value: "minecraft:black", title: 'Black' },
      { value: "minecraft:all_black", title: 'All Black' },
      { value: "minecraft:ragdoll", title: 'Ragdoll' },
      { value: "minecraft:british_shorthair", title: 'British Shorthair' },
      { value: "minecraft:red", title: 'Red' },
    ],
  },
  "minecraft:husbandry/feed_snifflet": {
    title: "Little Sniffs",
  },
  "minecraft:husbandry/fishy_business": {
    title: "Fishy Business",
  },
  "minecraft:husbandry/froglights": {
    title: "With Our Powers Combined!",
  },
  "minecraft:husbandry/kill_axolotl_target": {
    title: "The Healing Power of Friendship!",
  },
  "minecraft:husbandry/leash_all_frog_variants": {
    title: "When the Squad Hops into Town",
  },
  "minecraft:husbandry/make_a_sign_glow": {
    title: "Glow and Behold!",
  },
  "minecraft:husbandry/obtain_netherite_hoe": {
    title: "Serious Dedication",
  },
  "minecraft:husbandry/obtain_sniffer_egg": {
    title: "Smells Interesting",
  },
  "minecraft:husbandry/plant_any_sniffer_seed": {
    title: "Planting the Past",
  },
  "minecraft:husbandry/plant_seed": {
    title: "A Seedy Place",
  },
  "minecraft:husbandry/ride_a_boat_with_a_goat": {
    title: "Whatever Floats Your Goat!",
  },
  "minecraft:husbandry/root": {
    title: "Husbandry",
  },
  "minecraft:husbandry/safely_harvest_honey": {
    title: "Bee Our Guest",
  },
  "minecraft:husbandry/silk_touch_nest": {
    title: "Total Beelocation",
  },
  "minecraft:husbandry/tactical_fishing": {
    title: "Tactical Fishing",
  },
  "minecraft:husbandry/tadpole_in_a_bucket": {
    title: "Bukkit Bukkit",
  },
  "minecraft:husbandry/tame_an_animal": {
    title: "Best Friends Forever",
  },
  "minecraft:husbandry/wax_off": {
    title: "Wax Off",
  },
  "minecraft:husbandry/wax_on": {
    title: "Wax On",
  },
  "minecraft:husbandry/place_dried_ghast_in_water": {
    title: "Stay Hydrated!",
  },
  "minecraft:husbandry/repair_wolf_armor": {
    title: "Good as New",
  },
  "minecraft:husbandry/whole_pack": {
    title: "The Whole Pack",
    criteria: [
      {value: 'minecraft:woods', title: 'Woods'},
      {value: 'minecraft:ashen', title: 'Ashen'},
      {value: 'minecraft:black', title: 'Black'},
      {value: 'minecraft:chestnut', title: 'Chestnut,'},
      {value: 'minecraft:pale', title: 'Pale'},
      {value: 'minecraft:rusty', title: 'Rusty'},
      {value: 'minecraft:snowy', title: 'Snowy'},
      {value: 'minecraft:spotted', title: 'Spotted'},
      {value: 'minecraft:striped', title: 'Striped'},
    ]
  },
  "minecraft:husbandry/remove_wolf_armor": {
    title: "Shear Brilliance",
  },
};
