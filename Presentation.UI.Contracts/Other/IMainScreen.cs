using System;
using System.Collections.Generic;

namespace Presentation.UI.Contracts
{
    public interface IMainScreen
    {
        IHealthPoints HealthPoints { get; }
        IRadiation Radiation { get; }
        IAreaRadiation AreaRadiation { get; }
        ISet<ICharacterStatus> ActiveStatuses { get; }
        IActionPoints ActionPoints { get; }
        IAmmo Ammo { get; }
        ISet<IQuest> TrackedQuests { get; }
        int EquippedGrenadeCount { get; }
        bool IsFlashlightOn { get; }
        ISet<IMessage> Messages { get; }
        IRadar Radar { get; }
        IDialogue Dialogue { get; }
        ISet<IList<IItem>> FavouriteItems { get; }
        string AreaName { get; }
        IStealth Stealth { get; }
    }
}
