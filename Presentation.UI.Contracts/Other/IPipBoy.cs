using System.Collections.Generic;

namespace Presentation.UI.Contracts
{
    interface IPipBoy
    {
        ISet<IPerk> Perks { get; }
        IStats Stats { get; }
        IInventory Inventory { get; }
        IData Data { get; }
        IMap Map { get; }
        IRadio Radio { get; }
        IRadiation Radiation { get; }
        IEquipmentWeight Weight { get; }
        ICurrency Currency { get; }
        IGameTime GameTime { get; }
        ISet<IDamageResistance> TotalDamageResistance { get; }
        ISet<IWeaponDamage> TotalWeaponDamage { get; }
        int StimpakCount { get; }
        void UseStimpak();
        int RadawayCount { get; }
        void UseRadaway();
        void LevelUp();
    }
}
