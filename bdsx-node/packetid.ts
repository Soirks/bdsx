
/**
 * I refer to this document: https://github.com/NiclasOlofsson/MiNET/blob/master/src/MiNET/MiNET/Net/MCPE%20Protocol%20Documentation.md
 */
enum PacketId
{
    Login=0x01,
    PlayStatus=0x02,
    ServerToClientHandshake=0x03,
    ClientToServerHandshake=0x04,
    Disconnect=0x05,
    ResourcePacksInfo=0x06,
    ResourcePackStack=0x07,
    ResourcePackClientResponse=0x08,
    Text=0x09,
    SetTime=0x0a,
    StartGame=0x0b,
    AddPlayer=0x0c,
    AddEntity=0x0d,
    RemoveEntity=0x0e,
    AddItemEntity=0x0f,
    TakeItemEntity=0x11,
    MoveEntity=0x12,
    MovePlayer=0x13,
    RiderJump=0x14,
    UpdateBlock=0x15,
    AddPainting=0x16,
    Explode=0x17,
    LevelSoundEventOld=0x18,
    LevelEvent=0x19,
    BlockEvent=0x1a,
    EntityEvent=0x1b,
    MobEffect=0x1c,
    UpdateAttributes=0x1d,
    InventoryTransaction=0x1e,
    MobEquipment=0x1f,
    MobArmorEquipment=0x20,
    Interact=0x21,
    BlockPickRequest=0x22,
    EntityPickRequest=0x23,
    PlayerAction=0x24,
    EntityFall=0x25,
    HurtArmor=0x26,
    SetEntityData=0x27,
    SetEntityMotion=0x28,
    SetEntityLink=0x29,
    SetHealth=0x2a,
    SetSpawnPosition=0x2b,
    Animate=0x2c,
    Respawn=0x2d,
    ContainerOpen=0x2e,
    ContainerClose=0x2f,
    PlayerHotbar=0x30,
    InventoryContent=0x31,
    InventorySlot=0x32,
    ContainerSetData=0x33,
    CraftingData=0x34,
    CraftingEvent=0x35,
    GuiDataPickItem=0x36,
    AdventureSettings=0x37,
    BlockEntityData=0x38,
    PlayerInput=0x39,
    LevelChunk=0x3a,
    SetCommandsEnabled=0x3b,
    SetDifficulty=0x3c,
    ChangeDimension=0x3d,
    SetPlayerGameType=0x3e,
    PlayerList=0x3f,
    SimpleEvent=0x40,
    TelemetryEvent=0x41,
    SpawnExperienceOrb=0x42,
    ClientboundMapItemData=0x43,
    MapInfoRequest=0x44,
    RequestChunkRadius=0x45,
    ChunkRadiusUpdate=0x46,
    ItemFrameDropItem=0x47,
    GameRulesChanged=0x48,
    Camera=0x49,
    BossEvent=0x4a,
    ShowCredits=0x4b,
    AvailableCommands=0x4c,
    CommandRequest=0x4d,
    CommandBlockUpdate=0x4e,
    CommandOutput=0x4f,
    UpdateTrade=0x50,
    UpdateEquipment=0x51,
    ResourcePackDataInfo=0x52,
    ResourcePackChunkData=0x53,
    ResourcePackChunkRequest=0x54,
    Transfer=0x55,
    PlaySound=0x56,
    StopSound=0x57,
    SetTitle=0x58,
    AddBehaviorTree=0x59,
    StructureBlockUpdate=0x5a,
    ShowStoreOffer=0x5b,
    PurchaseReceipt=0x5c,
    PlayerSkin=0x5d,
    SubClientLogin=0x5e,
    InitiateWebSocketConnection=0x5f,
    SetLastHurtBy=0x60,
    BookEdit=0x61,
    NpcRequest=0x62,
    PhotoTransfer=0x63,
    ModalFormRequest=0x64,
    ModalFormResponse=0x65,
    ServerSettingsRequest=0x66,
    ServerSettingsResponse=0x67,
    ShowProfile=0x68,
    SetDefaultGameType=0x69,
    RemoveObjective=0x6a,
    SetDisplayObjective=0x6b,
    SetScore=0x6c,
    LabTable=0x6d,
    UpdateBlockSynced=0x6e,
    MoveEntityDelta=0x6f,
    SetScoreboardIdentityPacket=0x70,
    SetLocalPlayerAsInitializedPacket=0x71,
    UpdateSoftEnumPacket=0x72,
    NetworkStackLatencyPacket=0x73,
    ScriptCustomEventPacket=0x75,
    SpawnParticleEffect=0x76,
    AvailableEntityIdentifiers=0x77,
    LevelSoundEventV2=0x78,
    NetworkChunkPublisherUpdate=0x79,
    BiomeDefinitionList=0x7a,
    LevelSoundEvent=0x7b,
    LevelEventGeneric=0x7c,
    LecternUpdate=0x7d,
    VideoStreamConnect=0x7e,
    ClientCacheStatus=0x81,
    OnScreenTextureAnimation=0x82,
    MapCreateLockedCopy=0x83,
    StructureTemplateDataExportRequest=0x84,
    StructureTemplateDataExportResponse=0x85,
    UpdateBlockProperties=0x86,
    ClientCacheBlobStatus=0x87,
    ClientCacheMissResponse=0x88,
}

export = PacketId;
