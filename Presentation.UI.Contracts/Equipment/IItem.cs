using System.Collections.Generic;

namespace Presentation.UI.Contracts
{
    public interface IItem
    {
        IImage Image { get; }
        string Name { get; }
        int Count { get; }
        float Weight { get; }
        float Condition { get; }
        int Value { get; }
        int Amount { get; }
        bool IsFavourited();
        ICompareResult CompareTo(IItem currentlyHeldItem);
        // NonQuest items?
        void Drop();
        // Weapon specific
        int AmmoName { get; }

        int TotalAmmo { get; }
        int FireRate { get; }
        int Range { get; }
        int Accuracy { get; }
        ISet<IWeaponDamage> WeaponDamage { get; }
        // Armour specific
        ISet<IDamageResistance> DamageResistances { get; }
        // Aid specific
        ISet<ICharacterStatus> StatusModifiers { get; }
        // Based on status modifiers?
        string GetDesctiption();
        // Holotape specific
        void Play();
        // Notes
        void Read();
        void Learn();
        // Junk
        ISet<IScrap> Scraps { get; }
        // Maybe container items?
    }
}
