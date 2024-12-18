<template>
    <div class="container-xl ">
        <div class="row d-flex px-2 justify-content-center">
            <div v-for="(element, index) in ItemsIcon" class="col-4 col-md-2 text-center m-1 align-items-center bg-color-FFblue rounded-3">
                <button type="button" class=" btn text-white" data-bs-toggle="modal" data-bs-target="#ItemModal" v-on:click="getItemData(ItemsID[index])">
                    <p>{{ ItemsName[index] }}</p>
                    <!-- <a href="https://eu.finalfantasyxiv.com/lodestone/playguide/db/item/b2cab67854f/" class="eorzeadb_link">Dreadwyrm Blade</a> -->
                    <img :src="'https://xivapi.com' + element" class="mb-2" alt="">
                    <!--TODO: Add a modal that shows information of each item-->
                </button>
            </div>
        </div>
    </div>
    
    
    <div v-for="(element, index) in ItemsIcon" class="modal fade" id="ItemModal" tabindex="-1" aria-labelledby="itemModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header bg-color-FFgray">
                    <h1 class="modal-title fs-5" id="itemModalLabel">{{ LocalName }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body bg-color-FFgray" >
                    <div class="container">
                        <div class="row">
                            <div class="col-3">
                                <img :src="'https://xivapi.com' + LocalIcon" class="mb-2 img-fluid" alt="">
                            </div>
                            <div class="col-9">{{ LocalDesc }}</div>
                        </div>
                        <hr class="hr" />
                        <div class="row">
                            <div class="col-3">
                                Item Kind
                            </div>
                            <div class="col-9">
                                {{ LocalKind }}
                            </div>
                        </div>
                        <hr class="hr" v-if="repairable"/>
                        <div class="row" v-if="repairable">
                            <div class="col-3">
                                Repair Item Required
                            </div>
                            <div class="col-9">
                                {{ LocalRepair }}
                            </div>
                        </div>
                        <hr class="hr" v-if="isWeapon"/>
                        <div class="row" v-if="isWeapon">
                            <div class="col-2">
                                Stats
                            </div>
                            <div class="col-4">
                                Physical Damage: {{ LocalPhysDamg }}
                            </div>
                            <div class="col-4">
                                Magical Damage: {{ LocalMagDamg }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer bg-color-FFgray">
                    <button type="button" class="btn bg-color-FFblue" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    ItemsID: Array,
    ItemsIcon: Array,
    ItemsName: Array,
    Itemslink: Array,
})

let LocalName = ref('placeholderName');
let LocalIcon = ref('test');
let LocalDesc = ref('placeholderDesc');
let LocalKind = ref('placeholderKind')
let LocalRepair = ref('placeholderRepair')
let LocalPhysDamg = ref('placeholderDmg1')
let LocalMagDamg = ref('placeholderDmg2')

// let LocalLink = props.Itemslink;
let repairable = true
let isWeapon = true
let isArmor = true

// console.log(LocalIcon)


async function getItemData(params) {
    const response = await fetch(`https://xivapi.com/item/${params}?columns=Name,Description,ItemKind,ItemRepair,IconHD,ItemUICategory,DamageMag,DamagePhys`)
    const data = await response.json()


    console.log(data)
    LocalIcon = data.IconHD

    LocalName.value = data.Name

    if (data.Description == "") {
        LocalDesc.value = data.ItemUICategory.Name
    }
    else
    {
        LocalDesc.value = data.Description
    }

    LocalKind.value = data.ItemKind.Name

    if(data.ItemRepair == null)
    {
        LocalRepair.value = '???'
        repairable = false
    }
    else
    {
        LocalRepair.value = data.ItemRepair.Item.Name
        repairable = true
    }
    if(data.ItemKind.ID === 1)
    {
        LocalPhysDamg.value = data.DamagePhys
        LocalMagDamg.value = data.DamageMag
        isWeapon = true
    }
    else
    {
        isWeapon = false
    }

}

</script>