using System.Collections.Generic;

namespace Presentation.UI.Contracts
{
    interface IInventory
    {
        ItemCategory Filter { get; set; }
        ISet<IItem> Items { get; }
        void ChangeSortType();
        void ToggleFavourite(IItem item);
        void InspectItem(IItem item);
        void RepairItem(IItem item);
        void DropItem(IItem item);
        //??
        void CycleDamage();
    }
}
